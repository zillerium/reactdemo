import {useParams} from "react-router-dom";

const Product = (props) => {
  return (
	  <div>
	  <h1>Product {props.productId}</h1>
	  <p>Product is {props.desc}</p>
	  </div>
  )
}

export default Product;
