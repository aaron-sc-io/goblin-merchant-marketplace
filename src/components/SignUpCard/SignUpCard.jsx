import { TextField, Box, Button, Card, Typography, Divider, Alert } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// TODO Also add username/email login func
const SignUpCard = ({ handleNavigateRoot, handleNavigateSignIn }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const { handleSignup } = useAuth();

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    if (password !== confirmpass) {
        return setError('Passwords do not match.');
    }

    try {
      setError('');
      setLoading(true);
      await handleSignup(username, password);
      handleNavigateRoot();
    }
    catch (e) {
      setError('Failed to create an account.');
      console.log(e);
    }
    setLoading(false);
  }


  return(
    <Card sx={{ width: '300px', minHeight: '500px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 40, my: 1 }}> Sign Up </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          id='email-address'
          label='Email Address'
          variant='filled'
          onChange={e => setUsername(e.target.value)}
          sx={{ width: '250px', pb: 2, mt: 2 }}
          />
        <TextField
          id='password'
          label='Password'
          type='password'
          variant='filled'
          onChange={e => setPassword(e.target.value)}
          sx={{ width: '250px', pb: 2 }}
          />
        <TextField
          id='password-confirm-input'
          label='Password Confirmation'
          type='password'
          autoComplete='current-password'
          variant='filled'
          onChange={e => setConfirmPass(e.target.value)}
          sx={{ width: '250px', pb: 2 }}
          />
        <Button 
          variant='contained' 
          disabled={loading} 
          onClick={handleSubmitClick}
          sx={{ width: '150px', mb: 3 }}
        >
          Sign Up
        </Button>
        <Divider variant="middle" style={{width:'80%'}} />
        <Box sx={{ display: 'flex', alignItems: 'center',  mt: 2 }}>
          <Typography sx={{ fontSize: 15 }}>Already have an account?   </Typography>
          <Button onClick={handleNavigateSignIn}>Sign In</Button>
        </Box>    
      </Box>
    </Card>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default SignUpCard;