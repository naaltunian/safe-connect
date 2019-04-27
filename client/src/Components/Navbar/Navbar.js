import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/sc.png'; 

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/"><img src={logo} className="logo" alt="basketball" height="50px" /></Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/play">Play</Link>
            <span className="push">
                <Link className="link" to="/placeholder">Sign In</Link>
                <Link className="link" to="/sign-up">Sign Up</Link>
            </span>
         </div>
    )
}

export default Navbar;