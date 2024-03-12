import React from 'react'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
function Navbar(props) {
  return (
    <div className='navbar'>
        <div><h1>UseReducer</h1></div>
        <div className='icon'><FaShoppingCart style={{height: "30px", width: "50px"}} /></div>
    </div>
  )
}

export default Navbar