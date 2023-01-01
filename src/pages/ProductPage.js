import {useParams, useLocation, useNavigate} from "react-router-dom";
import React, {useState} from 'react';

const ProductPage = (props) => {
	const {productId}=useParams();
//	const prodId = useLocation().state.prodId;
//	const [location, setLocation]=useState();
//	console.log("state = "+JSON.stringify(location));
//	console.log("use params = "+JSON.stringify(useParams));
	console.log("productId = "+productId);
//	console.log("prodId = "+prodId);
	return (
	  <div>
	  <h1>Product {productId}</h1>
	  </div>
  )
}

export default ProductPage;

//export default ({match: {params:{id}}}) =>  <h1>{id}</h1>;
