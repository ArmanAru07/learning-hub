import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const ProviderLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
//register
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
//signIn
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
//logOut
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, ProviderLogin, createUser, signIn, logOut};

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;