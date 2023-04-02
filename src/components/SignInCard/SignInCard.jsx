import { TextField, Box, Button, Card, Typography, Divider, Alert } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// TODO Also add username/email login func
const SignInCard = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignin } = useAuth();
  const navigate = useNavigate();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await handleSignin(username, password);
      navigate('/');
    } catch (e) {
      setError('Failed to sign in');
      // replace console logs with error switch display
      console.log(e);
    }
    setLoading(false);
  };

  return(
    <Card sx={{ width: '300px', minHeight: '350px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 40, mt: 1 }}> Log In </Typography>
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
        <Button 
          variant='contained' 
          disabled={loading} 
          onClick={handleSignInSubmit}
          sx={{ width: '150px', pb: 1 }}
        >
          Submit
        </Button>
        <Divider variant="middle" />
        <Box sx={{ display: 'flex', alignItems: 'center',  mt: 2.5 }}>
          <Typography sx={{ fontSize: 15 }}>Forgot Password? </Typography>
          <Button>Click Here</Button>
        </Box>    
      </Box>
    </Card>
  );
};

export default SignInCard;