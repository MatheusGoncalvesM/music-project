import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.css';

function Navbar() {
    return (
        <nav>
            <Link to="/" className="logo"></Link> 

            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/products">Products</Link></li> 
                <li><Link to="/contact">Contact</Link></li> 
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
