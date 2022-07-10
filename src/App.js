import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
 

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstname: 'trfevor',
        lastname: 'oakley'
      },
      company: 'ibm'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name.firstname} at {this.state.company}
          </p>
          <button onClick={() => {
            //this.state.name = 'john';
            this.setState({
              name: { firstname:'john', lastname: 'johnson'}
            })
            console.log(this.state);
          }}>chg name</button>
        </header>
      </div>
    );
  }
}

export default App;
