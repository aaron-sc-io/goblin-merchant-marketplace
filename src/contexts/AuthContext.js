import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const handleSignup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
    signUp
  }

  return (
    <AuthContext.Provider value={value}>

    </AuthContext.Provider>
  )
}
