import {useContext} from 'react'
import {MenuContext} from '../helpers/Context'

const  Menu = () => {
	const {menu, setMenu, userName, setUserName} = useContext(MenuContext);
return (
	<>
<h1>Menu</h1>
<input type="text" placeholder="menu " onChange={(e)=>{setUserName(e.target.value)}}/>
	<button onClick={()=>setMenu("buy")}>Start</button>
</>
)
}

export default Menu;
