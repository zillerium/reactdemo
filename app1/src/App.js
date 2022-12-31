import logo from './logo.svg';
import './App.css';
import axios from "axios";
import NavBar from "./NavBar";
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/Home';
import {Route, Routes, useNavigate} from 'react-router-dom';
import './styles.css'
import React, {useState} from 'react';

const getData = async (postJson) => {
    const baseUrl = "https://peacioapi.com:3000/getDBData";
    const client = axios.create({
	baseURL: "https://peacioapi.com:3000/getDBData"
    })
    //let res = await client.post();
    let res = await axios.post(baseUrl, postJson);
    console.log("res == "+JSON.stringify(res.data));
    return (JSON.stringify(res.data));
}

const Button = () => {
   return (<button onClick={getData}>Get Data</button>)
}
const App = () => {
   console.log(window.location);
   const navigate = useNavigate();
   const [productID, setProductID]= useState(null);
   const [price, setPrice]= useState(0);
   const [data, setData]= useState(null);
   const [print, setPrint]= useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const product = {
          price: price,
	  productID: productID
      }
      console.log(product);
      await getData(product);
      navigate('/about');

   }

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
      <div>
          <form onSubmit={handleSubmit}>
              <label>Product ID</label>
	      <input 
	         type="text"
	         required
	         value={productID}
	         onChange={(e)=>setProductID(e.target.value)}
	       />
              <label>Price</label>
	      <input 
	         type="text"
	         required
	         value={price}
	         onChange={(e)=>setPrice(e.target.value)}
	       />

               <button>Add</button>
	       <p>{productID}</p>

	       <p>{price}</p>
	  </form>

      </div>
      <div>
	   {
	       print ?
	       <h1>{data}</h1> 
	       : null
           }
      </div>
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
