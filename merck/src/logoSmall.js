//make a react component for a logo

import React from 'react';
import logo from './logo.png';
import './logoSmall.css';

export default function LogoSmall() {
    return (
        <div className="logoSmall">
        <img src={logo} alt="logo" />
        </div>
    );
}