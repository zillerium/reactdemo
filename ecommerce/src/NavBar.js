import {Link, useMatch, useResolvedPath} from "react-router-dom"
const NavBar=() => {
  return <nav className="nav">
      <Link to="/" className="site-title">Peacio</Link>
      <ul>
		<CustomLink to="/cart" >Cart</CustomLink>
		<CustomLink to="/addproduct" >Add Product</CustomLink>
		<CustomLink to="/about" >About</CustomLink>
      </ul>
  </nav>


}

const CustomLink = ({to, children, ...props}) => {
   const path = window.location.pathname;
	const resolvedPath = useResolvedPath (to);
	const isActive = useMatch({ path: resolvedPath.pathname, end:true});
console.log("children = " + children);
console.log("children = " + children);
console.log("props = " + JSON.stringify({...props}));
   return (
      <li className={isActive ? "active" : ""}>
         <Link to={to} {...props}>
             {children}
	 </Link>
      </li>
   )
}

export default NavBar;
