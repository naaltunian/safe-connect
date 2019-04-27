import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/sc.png'; 

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/dashboard"><img src={logo} className="logo" alt="basketball" height="50px" /></Link>
            <Link className="link" to="/about">About</Link>
            <span className="push">
                <Link className="link" to="/register">Register</Link>
                <Link className="link" to="/login">Login</Link>
            </span>
         </div>
    )
}

export default Navbar;