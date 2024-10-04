import React from 'react';
import './index.css'
import search_icon from './assets/search_icon.png'

function Navbar() {
    return(
        <nav>
            <a href="/" className="logo"></a>

            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
            </ul>

            <div className="search-box">
                <input type="text" placeholder="Search"/>
                <img src={search_icon} alt="Search"></img>
            </div>
            <a href="/" className="profile"></a>
        </nav>
    )
}

export default Navbar