import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';


function App() {

	const [image, setImage]=useState(false);


	const {isLoading, error, data, isFetching, refetch} = useQuery('dogs',
		() => axios ('https://random.dog/woof.json'),
		{
			enabled: false,
		}
		
		);

const Button = () => {
return	  <button onClick={refetch}>Get </button>
}


 console.log("render");
 console.log(error);
 console.log(data);
	if (error) return <h1>{error.message}</h1>
	if (isLoading) return <h1>Loading</h1>
		//console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p><div>
  <Button />
	  <button onClick={refetch}>Get </button>
         </div>
	  Learn React
	  <img src={data.data.url}/>
      </header>
    </div>
  );
}

export default App;
