import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth';
import { auth } from './firebase-config';

const LoginDemo = () => {
  const [registerEmailAddress, setRegisterEmailAddress] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmailAddress, setLoginEmailAddress] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmailAddress,
        registerPassword
      );
      console.log(user);
    } 
    catch (e) {
      console.error(e.message);
    }
  };



  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmailAddress,
        loginPassword
      );
      console.log(user);
    } 
    catch (e) {
      console.error(e.message);
    }
  };

  const handleLogout = async () => {
      await signOut(auth);
  };

  return (
    <>
      <div>
        Login
      </div>
      <input
        placeholder='email'
        onChange={e => {
          setRegisterEmailAddress(e.target.value)
        }}
      />
      <input
        placeholder='password'
        onChange={e => {
          setRegisterPassword(e.target.value)
        }}
      />
      <button onClick={handleRegister}>Create User</button>
      <input
        placeholder='email'
        onChange={e => {
          setLoginEmailAddress(e.target.value)
        }}
      />
      <input
        placeholder='password'
        onChange={e => {
          setLoginPassword(e.target.value)
        }}
      />
      <button onClick={handleLogin}>Sign In</button>

      

      <div>
        {currentUser ? currentUser.email : 'Not Logged In'}
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
};

export default LoginDemo;