import logo from './logo.svg';
import './App.css';
import Ex from './Ex.js';
import React, {useState, useEffect} from 'react'

const App = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems]=useState([]);
  useEffect(() => {
       console.log("render");
	  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
	  .then(response =>response.json())
	  .then(json=>setItems(json))
  }, [resourceType])

  useEffect(() => {
       console.log("render mount");
  }, [])
  return (
    <div className="App">
        <p>test
        </p>
	  <div>
	    <Ex />
	  </div>
	  <div>
              <button onClick={()=>setResourceType("posts")}>Posts</button>
              <button onClick={()=>setResourceType("users")}>Users</button>
              <button onClick={()=>setResourceType("comments")}>Comments</button>
	  </div>
	  <h1>{resourceType}</h1>
	  {items.map(m=>{return <pre>{JSON.stringify(m.name)}</pre>})}
    </div>
  );
}

export default App;
