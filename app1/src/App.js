import logo from './logo.svg';
import './App.css';
import axios from "axios";
import NavBar from "./NavBar";
import Pricing from './pages/Pricing';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Home from './pages/Home';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import './styles.css'
import React, {useState, useRef} from 'react';

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
     <case "/":
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
	const inProd = useRef(null);
	const data1= {prodId1: 4};
	const [prodId, setProdId] = useState();
	const [productName, setProductName] = useState("");
	const [nameList, setNameList] = useState("");
	const [Display, setDisplay] = useState(false);
        const setProdIdFn = () => {
   	    setProdId(4);
	}


const completedProduct = (productName) => {
	console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxcompleted prod = " + productName);
    let arr = nameList.map((product)=> { 
console.log("product. product " + product.product);
console.log("productName " + productName);
	    if (product.product == productName ) { 
		    console.log("matched"); 
		    return {product:productName, completed: true};
	    }
            else { 
		    console.log("unmatched"); 
		    return {product:product.product, completed:product.completed};
	    }
	 //   return (
	 //           product.product ==productName ?
////		    {product:productName, completed: true} :
//		    {product:product.product, completed: false} 
//	    ) 
    })
	setNameList(arr);
	console.log("array == " +JSON.stringify(arr));
	console.log("name list == " +JSON.stringify(nameList));
}

const deleteProduct = (productName) => {
    setNameList(nameList.filter((product)=> { return product.product !=productName}))
}

const addList = () => {
    setNameList([...nameList, {product: productName, completed: false}]);
	console.log(nameList);
	inProd.current.value = "";
	setProductName("");
}

	const linkstr = "/product/4";
	   const productId = 2;
   return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductPage   />} />
      </Routes>
	   <div>
	   {prodId}
	   </div>
	   <div>
           <button onClick={setProdIdFn}>Change</button>
	   </div>
	   <div>
              <Link to={{
		      pathname:linkstr, 
		      state:data1}}>Prod</Link>
	   </div>
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
               <button onClick={()=>{setDisplay(true)}}>Display</button>
	   {Display && <div>Display {productId}</div>}
	   </div>
	   <div><h1>Add a product</h1></div>
	   <div>
               <input type="text"
	   ref={inProd}
	   onChange={(e)=>setProductName(e.target.value)} />
	       <button onClick={addList}> Add a product</button>
	   </div>
	   <div>product name =
	       {productName}
	   </div>
	   <div>
	   <h1>tst list</h1>
	   <ul>
	   { nameList && nameList.map((val, key) => {
                    return (
			    <div>
			    <li key={key}>{val.product}</li>
                            <button onClick={() => completedProduct(val.product)}>Completed</button>
                            <button onClick={() => deleteProduct(val.product)}>Del</button>
			    <h2>{val.completed ? 'completed' : 'incomplete'}</h2>
			    </div>
		    )	    
	       })}
           </ul>
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
