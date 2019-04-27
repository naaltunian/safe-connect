import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/"><img className="logo" src={logo} alt="basketball" height="50px" /></Link>
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