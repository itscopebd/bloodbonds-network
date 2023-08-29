"use client"

import { auth } from '@/firebase/firebase';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext=createContext()

export const AuthProvider = ({children}) => {
    let [user, setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
    
    
      const profileUpdate = async (updateUser = {}) => {
        setLoading(true);
        await updateProfile(auth.currentUser, updateUser);
        setUser((preUser) => ({ ...preUser, ...updateUser }));
      };
    
      const googleLogin = () => {
        const googleProvider= new GoogleAuthProvider()
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
      const facebookLogin = () => {
        const faceookProvider= new FacebookAuthProvider()
        setLoading(true);
        return signInWithPopup(auth, faceookProvider);
      };
    
      const logout = () => { 
        
        setLoading(true);
        return signOut(auth);
      };
    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        });
    
        () => {
          unsubscribe();
        };
      }, []);
    
      let value={
        user,loading,createUser,logout,googleLogin,profileUpdate,signIn,facebookLogin
      }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const UserAuth = ()=>{
    return useContext(AuthContext)
}
