import logo from './logo.svg';
import './App.css';
import axios from "axios";
import NavBar from "./NavBar";
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/Home';
import {Route, Routes } from 'react-router-dom';
import './styles.css'

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
      <header className="App-header">
	  <p>This is a text</p>
	  <Button />
      </header>
    </div>
  );
}

export default App;
