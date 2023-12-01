import { TextField, Box, Button, Card, Typography, Divider, Alert } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import DndButton from '../DndButton/DndButton';

// TODO Also add username/email login func
const SignInCard = ({ handleNavigateRoot, handleNavigateForgotPass, handleNavigateCreateAccount }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignin } = useAuth();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await handleSignin(username, password);
      handleNavigateRoot();
    } catch (e) {
      setError('Failed to sign in');
      // replace console logs with error switch display
      console.log(e);
    }
    setLoading(false);
  };

  return(
    <Card sx={{ width: '300px', height: '500px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 40, my: 1 }}> Log In </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          id='email-address'
          label='Email Address'
          variant='filled'
          onChange={e => setUsername(e.target.value)}
          sx={{ width: '250px', mt: 1 }}
          />
        <TextField
          id='password'
          label='Password'
          type='password'
          variant='filled'
          onChange={e => setPassword(e.target.value)}
          sx={{ width: '250px', mb: 3 }}
          />
        <DndButton text={'SUBMIT'} onClick={handleSignInSubmit} disabled={loading}/>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Button onClick={handleNavigateForgotPass} sx={{ textTransform: 'none', mb: 1 }}>
            Forgot Password?
          </Button>
        </Box>
        <Divider variant="middle" style={{width:'80%'}} />
        <Box sx={{ display: 'flex', alignItems: 'center',  my: 3.5 }}>
          {/* <Button sx={{ fontSize: 15, backgroundColor: 'primary' }} onClick={handleNavigateCreateAccount} variant='contained'>
            Create New Account
          </Button> */}
          <DndButton text={'REGISTER'} onClick={handleNavigateCreateAccount}/>
        </Box>  
      </Box>
    </Card>
  );
};

export default SignInCard;