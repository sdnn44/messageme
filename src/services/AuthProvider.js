import React, { useContext } from 'react'
import { auth, facebookProvider, googleProvider } from './firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = () => {

    const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
    const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);


  return (
    <div>AuthProvider</div>
  )
}
