import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/"><img className="logo" alt="basketball" height="50px" /></Link>
            <Link className="link" to="/about">About</Link>
            <span className="push">
                <Link className="link" to="/register">Register</Link>
                <Link className="link" to="/login">Login</Link>
            </span>
         </div>
    )
}

export default Navbar;