import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.css';
import search_icon from './assets/search_icon.png';

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

            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src={search_icon} alt="Search" />
            </div>
            <Link to="/" className="profile"></Link>
        </nav>
    );
}

export default Navbar;
