import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import {useContext} from 'react';
import {getProductData} from '../productsStore';

const CartProduct=(props)=> {
          const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const title = props.title;
	const price = props.price;
	console.log("title ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");
	console.log(props);
	console.log(price);
//	const productData = getProductData(id);

	return (
                 <>
                    <h3>{title}</h3>
		<p>{quantity} total </p>
		<p>${ (quantity * price).toFixed(2)}</p>
		<Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
		<hr/>

		</>

	)

}

export default CartProduct;
