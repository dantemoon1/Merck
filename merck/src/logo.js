//make a react component for a logo

import React,{useState} from 'react';
import logo from './logo.png';
import './logo.css';

function Logo() {
    const [expanded, setExpanded] = useState(false);

    const expand = () => {};

    return (
        <div className="logo">
        <img src={logo} alt="logo" />
        </div>
    );
}

export default Logo;