import React from "react";
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return(
        <nav className="navbar">
            <a className="logo">Frayern't</a>
            <ul className="navList">
                <li><NavLink to="/" className='fontLink'>Home</NavLink></li>
                <li><NavLink to="/aboutUs" className='fontLink'>About Us</NavLink></li>
                <li><NavLink to='/addProduct' className='fontLink'>Add Product</NavLink></li>
            </ul>
        </nav>
    )
}