import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
 

class App extends Component {
  constructor() {
       console.log('constructor');
    super();
    this.state = {
      monsters: [],
  }
}
// lifecycle method
componentDidMount() {
      console.log('did mount');
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => 
    //console.log(response)
     response.json()
  ).then((users) => this.setState( () => {
    return {monsters: users}
  },
  () => {
    console.log(this.state)
  }

  )
  //console.log(users)
  )
}

  render() {

    console.log('render');
    return (
      <div className="App">
          <input className='search-box' type='search'
           placeholder='monster' 
           onChange={(event)=>{
             console.log(event.target.value);
             console.log(this.state.monsters);
             this.state.monsters.filter(x=)
          }} />
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }

      </div>
    );
  }
}

export default App;
