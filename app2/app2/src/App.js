import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const  App=() => {
  const [name1, setName1] = useState('trevor');

  const handleClick = () => {
     setName1('jason');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{ name1 }
        </p>
	  <button onClick={handleClick}> Click me </button>
      </header>
    </div>
  );
}

export default App;
