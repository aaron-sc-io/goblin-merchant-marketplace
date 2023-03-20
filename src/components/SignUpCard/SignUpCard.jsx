import { TextField, Box, Button, Card, Typography } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useRef, useState } from 'react';




const SignUpCard = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { handleSignup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== 
      passwordConfirmRef.current.value) {
        return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await handleSignup(emailRef.current.value, passwordRef.current.value);
    }
    catch (e) {
      setError('Failed to create an account');
    }
    setLoading(false);
  }


  return(
    <Card sx={{ width: '300px', height: '375px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 40, mt: 1 }}> Sign Up </Typography>
        <TextField 
          id='email-address'
          label='Email Address'
          variant='filled'
          ref={emailRef}
          sx={{ width: '250px', pb: 2, mt: 2 }}
          />
        <TextField
          id='password'
          label='Password'
          type='password'
          variant='filled'
          ref={passwordRef}
          sx={{ width: '250px', pb: 2 }}
          />
        <TextField
          id='password-confirm-input'
          label='Password Confirmation'
          type='password'
          autoComplete='current-password'
          variant='filled'
          ref={passwordConfirmRef}
          sx={{ width: '250px', pb: 2 }}
          />
        <Button 
          variant='contained' 
          disabled={loading} 
          onClick={handleSubmit}
          sx={{ width: '150px', pb: 1 }}
        >
          Sign Up
        </Button>
      </Box>
    </Card>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default SignUpCard;