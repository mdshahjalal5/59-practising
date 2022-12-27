import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink className='' to="/">Shop</NavLink>
                <NavLink className='nav-bar-link' to="/orders">Orders</NavLink>
                <NavLink className='nav-bar-link' to="/inventory">Inventory</NavLink>
                <NavLink className='nav-bar-link' to="/about">About</NavLink>
                <NavLink className='nav-bar-link' to="/signup">Sign Up</NavLink>
                <NavLink className='nav-bar-link' to="/login">Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;