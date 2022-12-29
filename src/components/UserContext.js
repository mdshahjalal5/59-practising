import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export  const authContext =  createContext();
export  const auth  = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] =  useState('');
    const [error, setError] = useState('defaulat error');
    const [ loading,  setLoading] = useState(true);
    const signIn = function (email, password){
        return signInWithEmailAndPassword(auth, email, password);
    };
    const createUser = (email, password)=> createUserWithEmailAndPassword(auth, email, password);

    const googleSignIn = ()=> signInWithPopup(auth, new GoogleAuthProvider())

    const authInfo = {
        signIn,  createUser, googleSignIn, user, loading, error, setError
    }

    useEffect(function(){
        document.title = 'Pr'
        const effect =  onAuthStateChanged(auth, userCredential=>{
            setLoading(false);
            if(userCredential){
                console.log('userCredential by firebase', userCredential);
                setUser(userCredential);
                
            }
        })
        return function (){
            return  effect();            
        }
    }, [])
    return (
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        );
};

export default UserContext;