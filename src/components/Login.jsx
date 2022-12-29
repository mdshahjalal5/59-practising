import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'; 

import { toast } from 'react-toastify';
import './Login.css'
import { auth, authContext } from './UserContext';
const Login = () => {
    const {signIn } = useContext(authContext);
    const navigate = useNavigate();
    const locationAnyAny = useLocation();
    const fromAnyAny = locationAnyAny?.state?.fromAny?.pathname || '/';
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={function(e){
                e.preventDefault();
                const form = e.target
                const email = form.email.value;
                const password = form.password.value;
                signIn(email, password) 
                .then(result=>{
                    navigate(fromAnyAny, { replace: true })   
                    const user = result.user;
                    console.log(user, 'user');
                    updateProfile(auth.currentUser, {
                        displayName: "Jane Q. User",
                    }).then(() => {
                        console.log('profile display name updated');
                    })
                        .catch((error) => {
                            // An error occurred
                            console.log('error while updating d.Name')
                        });
                                                         
                    toast('hey dada successfully login',{
                        autoClose:500,
                        position:'top-left',
                    })
                })
            }} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input  className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;