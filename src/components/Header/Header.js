import { signOut } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { auth, authContext } from '../UserContext';
import './Header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const { user, setUser, signIn } = useContext(authContext);
    const logOut = ()=> {
        signOut(auth)
        .then(
            console.log('signed out'),
            setUser(''),
            navigate('/')
        )
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink className='' to="/">Shop</NavLink>
                <NavLink className='nav-bar-link' to="/orders">Orders</NavLink>
                <NavLink className='nav-bar-link' to="/inventory">Inventory</NavLink>
                <NavLink className='nav-bar-link' to="/about">About</NavLink>
                 {
                    !(user?.uid) && <NavLink className='nav-bar-link' to="/signup">Sign Up</NavLink>
                 }
                {
                    user.uid ? <NavLink className='nav-bar-link' to="/login" onClick={logOut}>Sign out</NavLink> : <NavLink className='nav-bar-link' to="/login" >Login</NavLink>
                }
            </div>
        </nav>
    );
};

export default Header;