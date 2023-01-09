import {useParams, useLocation, useNavigate} from "react-router-dom";
import React, {useState, useContext} from 'react';
import axios from 'axios';

import {CartContext} from '../CartContext';


//      let res = await searchDB(props.query);
  //      console.log(res.data);


const ProductPage = (props) => {
const [search, setSearch] = useState("");
	const {productId}=useParams();
      const cart=useContext(CartContext);	
	  const searchDB = async (searchVal) => {

          const baseUrl = "https://peacioapi.com:3000/getPart/"+searchVal;
          let res = await axios.get(baseUrl);
               console.log("res");
               console.log(res.data);
          //     setSearchedData(res.data.data[0]);
          return res;
	  }
//        const {menu, setMenu, userName, setUserName} = useContext(MenuContext);
//      const prodId = useLocation().state.prodId;
//      const [location, setLocation]=useState();
//      console.log("state = "+JSON.stringify(location));
//      console.log("use params = "+JSON.stringify(useParams));
        console.log("productId = "+productId);
        console.log(cart);
//      console.log("prodId = "+prodId);
        return (
          <>
	  <div>
          <h1>Product {productId} </h1>
          </div>
		</>
  )
}

export default ProductPage;

