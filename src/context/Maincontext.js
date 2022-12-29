import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseconfig';
import  {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const Maincontext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
      useEffect(() => {
   
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
         
          unsubscribe()
        }
      }, [])

      const authInfo = {
        user,
        createUser,
       
        signInWithGoogle,
       
        signin,
        
        loading,
        setLoading,
      }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Maincontext;