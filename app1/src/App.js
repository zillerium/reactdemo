import logo from './logo.svg';
import './App.css';
import axios from "axios";
import NavBar from "./NavBar";
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/Home';
import {Route, Routes } from 'react-router-dom';
import './styles.css'
import React, {useState} from 'react';

const getData = async () => {

const client = axios.create({
	baseURL: "https://peacioapi.com:3000/getDBData"
})
let res = await client.post();
	console.log("res == "+JSON.stringify(res.data));
	return (JSON.stringify(res.data));
}

const Button = () => {
   return (<button onClick={getData}>Get Data</button>)
}
const App = () => {
   console.log(window.location);
   const [data, setData]= useState(null);
   const [print, setPrint]= useState(null);
const handleChange = (e) => {
	setData(e.target.value);
	setPrint(false);
    console.log("changed data" + e.target.value);
}
   	
 /*  let Component;
   switch (window.location.pathname) {
     case "/":
       Component = Home;
       break;		   
     case "/pricing":
       Component = Pricing;
       break;		   
     case "/about":
       Component = About;
       break;		   

   }
   */
   return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <div>{print ?
	   <h1>{data}</h1> : null
      }</div>
      <div>	   
	   <input type="text" onChange={handleChange} />
	   <button onClick={()=>setPrint(true)}>Print</button> 
      </div>
      <div>
      </div>
      <header className="App-header">
	  <p>This is a text</p>
	  <Button />
      </header>
    </div>
  );
}

export default App;
