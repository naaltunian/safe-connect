import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/sc.png'; 

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/"><img src={logo} className="logo" alt="logoPicture" height="50px" /></Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/dashboard">Dashboard</Link>
            <span className="push">
                <Link className="link" to="/register">Register</Link>
                <Link className="link" to="/login">Login</Link>
            </span>
         </div>
    )
}

export default Navbar;