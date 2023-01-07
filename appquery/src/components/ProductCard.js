import {Card, Button, Form, Row, Col} from 'react-bootstrap';

const ProductCard = (props) => {
	const product = props.product;

	return (
              <Card>
                 <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Title>${product.price}</Card.Title>
		<Button variant="primary">Add to Cart</Button>
		</Card.Body>
	     </Card>
	)

}

export default ProductCard;
