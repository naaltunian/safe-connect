import React from 'react';
import './Video.css';
import { Link } from 'react-router-dom';

const Video = () => {
    return(
        <div>
        <div className="video-bar">
            <video autoPlay loop muted>
            <source src="https://stevencapuzzi.com/assets/front/marvel/safeconnect.mov" type="video/mp4" />
            </video>
        </div>
        <h1>Making sure we're safely connected to our loved ones.</h1>
        <div className="white-bar">
        <div className="white-bottom"></div>
        <div className="login-box">
            <h2>Log In</h2>
        </div>
        </div>
        </div>


    )
}

export default Video;
