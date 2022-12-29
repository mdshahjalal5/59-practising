import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, authContext } from './UserContext';
const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, setError, error, } = useContext(authContext);
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const  form = e.target;
                const  email = form.email.value;
                const password = form.password.value;
                const confirm = form.confirm.value; 
                 if(password !== confirm){
                    setError('confirmation not mach');     
                    return;
                 }
               
                    createUser(email, password)
                    .then(e => {
                            setError('');
                            toast('Successfully signup',
                                {
                                    position: "top-center",
                                    autoClose: 500,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                }
                            );
                          navigate('/');
                        updateProfile(auth.currentUser, {
                            displayName: "Jane Q. User", 
                        }).then(() => {
                          console.log('profile display name updated');
                        })
                        .catch((error) => {
                            // An error occurred
                            console.log('error while updating d.Name')
                        });
                        })
                        .catch(function (error) {
                            console.log(error, 'error')
                        })
               
            }}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input  className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error} </p>
        </div>
    );
};

export default SignUp;