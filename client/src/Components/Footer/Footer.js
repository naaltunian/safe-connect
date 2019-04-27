import React from 'react';
import './Footer.css';
import logo from './images/elogo.png'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
            <Link to="/"><img src={logo} className="logo2" alt="logoPicture" height="50px" /></Link>
            <span className="push">             
            </span>
         </div>
    )
}

export default Footer;