import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignout = () => {
    return signOut(auth);
  };

  const handleResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    handleSignup,
    handleSignin,
    handleSignout,
    handleResetPassword
  }

  return (
    <AuthContext.Provider 
      value={value}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
