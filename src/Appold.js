import logo from './logo.svg';
import './App.css';
import {MenuContext} from './helpers/Context';
import Menu from './components/Menu';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import './styles.css'
import React, {useState, useRef} from 'react';

const App = () => {
   const [menu, setMenu]=useState("menu");



   return (
    <div className="App">
           <MenuContext.Provider value={{menu, setMenu}}>		   
	   <div>
	   <p>Menu -- </p>
	   {menu === "menu" &&
              <Menu />}
	   </div>
	   </MenuContext.Provider>
    </div>
  );
}

export default App;
