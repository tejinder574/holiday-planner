import React from 'react';
import './NStyles.css';
import logo from "../../assets/logon.png"

function Navbar() {

    return(
        <div className='brand'>
            
            <div className='nav'>
                <h2 id="holiday">HOLIDAY</h2>
            </div>
            <div className="img-logo">
                <img id="logo-img" src={logo} alt="" />
            </div>
            <ul className='nav-menu'>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#recommend">Recommend</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
        </div>
    )
}

export default Navbar;