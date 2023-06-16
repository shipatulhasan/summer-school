import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile,signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.init';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({displayName:'S.h.Shakib'})
    const [isLoading,setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    // create user
    
    const createUser=(email,pass)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    // create google singin

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // create user login

    const signIn = (email,pass)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    // update profile

    const setUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setIsLoading(false)
            setUser(currentUser)
        })
        return ()=>unsubscribe()
    },[])


    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        logOut,
        setUserProfile,
        signIn,
        isLoading,
        setIsLoading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;