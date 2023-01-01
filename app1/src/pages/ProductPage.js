import {useParams, useLocation, useNavigate} from "react-router-dom";
//import React, {useState} from 'react';

const ProductPage = (props) => {
	const {productId}=useParams();
	const myloc = useLocation().state;
//	const [location, setLocation]=useState();
//	console.log("state = "+JSON.stringify(location));
//	console.log("use params = "+JSON.stringify(useParams));
	console.log("productId = "+productId);
	console.log("myloc = "+JSON.stringify(myloc));
	console.log("props = "+JSON.stringify(props));
	return (
	  <div>
	  <h1>Product {productId}</h1>
	  <p>Product is {props.desc}</p>
	  </div>
  )
}

export default ProductPage;

//export default ({match: {params:{id}}}) =>  <h1>{id}</h1>;
