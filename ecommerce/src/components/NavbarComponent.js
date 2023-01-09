import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import {useState, useContext } from 'react';
import axios  from 'axios';
import {CartContext} from '../CartContext';
import CartProduct from './CartProduct';

const NavbarComponent=()=>{

    const cart = useContext(CartContext);
    const [show, setShow]=useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	const checkout = async () => {

   const response = await axios.post("https://peacioapi.com:3000/checkout", cart.items);
		console.log(response);
		const url=response.data.data.url;
		console.log(response.data.data.url);
		window.location.assign(url);

	}

    const productsCount = cart.items.reduce((sum,product)=> sum+product.quantity, 0);

	console.log("carttttttttttttttttttttttttttttttttttttttttttttttttttt");
	console.log(cart);
	console.log("totallllllllllllllllllllllllllllllllllllllllllll");
	console.log(cart.getTotalCost());

return (
	<>
        <Navbar expand="sm">
           <Navbar.Toggle />
           <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Cart ({productsCount} items)</Button>
	    </Navbar.Collapse>
        </Navbar>
	<Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
	           <Modal.Body>
                	{productsCount > 0 ?
			     <>	
                             <p>Items</p>
				{cart.items.map((currentProduct, idx) => (
					<CartProduct key={idx} id={currentProduct.id} 
					quantity={currentProduct.quantity}
                                        title = {currentProduct.title}
                                        price = {currentProduct.price}

					></CartProduct>
				))}
				<h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
				<Button variant="success" onClick={checkout}>
                                    Buy
				</Button>
			     </>	
		        :
                            <h1>There are no items in your cart</h1>
	                }
	           </Modal.Body> 
	</Modal.Header>

	</Modal>
	</>

)
}

export default NavbarComponent;
