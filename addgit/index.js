// gaearon, sophiebits, sebmarkbage, bvaughn
const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
<div>
  {props.profiles.map(profile => <Card {...profile}/>)}
</div>
);

class Card extends React.Component {
render() {
  const profile = this.props;
  return (
    <div className="github-profile">
     <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    </div>
    );
  }
}

class Form extends React.Component {
state = { userName: '' };
handleSubmit = (event) => {
  event.preventDefault();
    console.log(this.state.userName);
  };
render() {
  return (
    <form onSubmit={this.handleSubmit}>
     <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
    </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData,
  };
 
render() {
  return (
    <div>
     <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
    </div>
    );
  }
}

ReactDOM.render(
<App title="The GitHub Cards App" />,
  mountNode,
);

// *** The React 18 way:
// root.render(
//   <App title="The GitHub Cards App" />,
// );


