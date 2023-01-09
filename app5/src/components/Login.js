import React, {useState, useContext} from 'react';
import {LoginContext} from '../contexts/LoginContext';

const Login = () => {

	const {setUserName, setShowProfile}=useContext(LoginContext);

   return (
      <>
         <input type="text" placeholder="username "
	   onChange={(e) => {setUserName(e.target.value)}} />
	   
         <input type="text" placeholder="password .."/>
         <button onClick={()=>{setShowProfile(true)}}>Login</button>
      </>

   )
}

export default Login;
