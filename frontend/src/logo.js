//make a react component for a logo

import React from 'react';
import logo from './logo.png';
import './logo.css';

function Logo() {
    return (
        <div className="logo">
        <img src={logo} alt="logo" />
        </div>
    );
}

export default Logo;