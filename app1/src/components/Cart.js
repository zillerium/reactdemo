import {useContext} from 'react'
import {MenuContext} from '../helpers/Context'
import {CartOption} from '../components/CartOption'
const  Cart = () => {
	const {menu, setMenu, userName, setUserName} = useContext(MenuContext);
return (
	<>
<h1>Cart</h1>
	<p>{CartOption[0].goodDesc}</p>
</>
)
}

export default Cart;
