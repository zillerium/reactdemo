import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';


function App() {

	const [image, setImage]=useState(false);

	const [firstName, setFirstName]=useState("");
	const [lastName, setLastName]=useState("");

	const {isLoading, error, data, isFetching, refetch} = useQuery('dogs',
		() => axios ('https://random.dog/woof.json'),
		{
			enabled: false,
		}
		
		);

const Button = () => {
return	  <button onClick={refetch}>Get </button>
}

const PostData = async  (user) => {
	let x = {keyword: user.firstName};
	const response = await axios.post("https://peacioapi.com:3000/getDBData", x);
//	console.log(x);
//	const response = await fetch("https://peacioapi.com:3000/getDBData", {
  //         method: 'POST',
//	   body: x,
//	headers: {
  //         'Content-type': 'application/json; charset-UTF-8'
//	}
//	})
	return response;


}

const {mutate,  isError} = useMutation(PostData, {
	onSuccess: (successData) => {
		console.log("post was done");

           console.log(successData);
	}
})
const ImageDisplay = () => {
return ( data ? <img src={data.data.url}/> : <p></p>);
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
	  <div>
            <label>First Name </label>{firstName}
	    <input type="text" placeholder="First " value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
	  </div>
	  <div>
            <label>Last Name </label>
	    <input type="text" placeholder="Last " value={lastName} onChange={(e)=>setLastName(e.target.value)} />
	  </div>
	  <div>
           <button onClick={()=>mutate({firstName:firstName, lastName, lastName})}>Post</button>
	  </div>
	  <ImageDisplay />
      </header>
    </div>
  );
}

export default App;
