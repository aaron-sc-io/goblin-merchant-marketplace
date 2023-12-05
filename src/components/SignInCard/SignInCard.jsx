import {  Box, Button, Card, Typography, Divider, Alert } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import CustomTextField from '../TextField/TextField';
import DndButton from '../DndButton/DndButton';
import background from '../../utility/img/background.webp';
import cardFrame from '../../utility/img/inven_frame.webp';
import '../../utility/ibarraFont.css'; 

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
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: -15, left: -10, height: '530px', width: '320px' }}>
        <img src={cardFrame} alt="card-frame" draggable="false" style={{ width: '100%', height: '100%' }}/>
      </div>
      <Card sx={{ width: '300px', height: '500px', borderRadius: '30px', 
      backgroundImage: `url(${background})`, color: '#CECECE' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
          <Box sx={{  mt: 4 }}>
            <Typography class={'ibarra-xl no-line-height'}> Log In </Typography>
          </Box>
          {error && <Alert severity="error">{error}</Alert>}
          <Box sx={{ mb: .5, mt: 1 }}>
            <CustomTextField 
              id='email-address'
              label='Email Address'
              onChange={e => setUsername(e.target.value)}
              />
          </Box>
          <CustomTextField
            id='password'
            label='Password'
            type='password'
            onChange={e => setPassword(e.target.value)}
            />
          <Box sx={{ mt: 5 }}>
            <DndButton text={'SUBMIT'} onClick={handleSignInSubmit} disabled={loading}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Button onClick={handleNavigateForgotPass} sx={{ fontFamily: "'Ibarra Real Nova', serif", color: '#FF8E00', p: 0, ":hover": {color: '#FFB353'} }}>
              Forgot Password?
            </Button>
          </Box>
          <Divider variant="middle" style={{width:'80%'}} />
          <Box sx={{ display: 'flex', alignItems: 'center',  my: 3.5 }}>
            <DndButton text={'REGISTER'} onClick={handleNavigateCreateAccount}/>
          </Box>  
        </Box>
      </Card>
    </div>
  );
};

export default SignInCard;