import {Button, Container, Navbar, Table, Modal} from 'react-bootstrap';
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
	  </Modal.Header>
	           <Modal.Body>
                                  <Table stripod  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Brand</th>
                                                      <th>Details</th>
                                                      <th>Qty</th>
                                                      <th>Price</th>
                                                      <th>Action</th>
                                                 </tr>
                                            </thead>
                	{productsCount > 0 ?

                                        <tbody>
					      {cart.items.map((currentProduct, idx) => (
                                        <tr>
                                                  <td>{currentProduct.id}</td>
                                                  <td>{currentProduct.title}</td>
                                                  <td>{currentProduct.quantity}</td>
                                                  <td>{currentProduct.price}</td>
		      <td> <Button size="sm" onClick={() => 
			      cart.deleteFromCart({currentProduct})}>Remove</Button></td>
                                        </tr>
						        ))}


                                       </tbody>



		        :
                            <h1>There are no items in your cart</h1>
	                }
				<h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
				<Button variant="success" onClick={checkout}>
                                    Buy
				</Button>
                                         </Table>
	           </Modal.Body> 

	</Modal>
	</>

)
}

export default NavbarComponent;
