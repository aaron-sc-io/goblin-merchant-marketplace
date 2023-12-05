import { Box, Button, Card, Typography, Divider, Alert } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import CustomTextField from '../TextField/TextField';
import DndButton from '../DndButton/DndButton'; 
import background from '../../utility/img/background.webp';
import cardFrame from '../../utility/img/inven_frame.webp';
import '../../utility/styles/ibarraFont.css'; 

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
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: -15, left: -10, height: '530px', width: '320px' }}>
        <img src={cardFrame} alt="card-frame" draggable="false" style={{ width: '100%', height: '100%' }}/>
    </div>
      <Card sx={{ width: '300px', height: '500px', borderRadius: '30px', 
      backgroundImage: `url(${background})`, color: '#CECECE' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
          <Box sx={{ mb: -1, mt: 4 }}>
            <Typography class={'ibarra-xl no-line-height'}> Sign Up </Typography>
          </Box>          {error && <Alert severity="error">{error}</Alert>}
          <Box sx={{ mb: .5, mt: 1 }}>
          <CustomTextField 
            id='email-address'
            label='Email Address'
            onChange={e => setUsername(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: .5 }}>
          <CustomTextField
            id='password'
            label='Password'
            type='password'
            onChange={e => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
          <CustomTextField
            id='password-confirm-input'
            label='Password Confirmation'
            type='password'
            autoComplete='current-password'
            onChange={e => setConfirmPass(e.target.value)}
            />
          </Box>
          <DndButton text={'SUBMIT'} onClick={handleSubmitClick} disabled={loading}/>
          <Divider variant="middle" style={{ width:'80%' }} />
          <Box sx={{ display: 'flex', alignItems: 'center',  mt: 1 }}>
            <Typography class={'ibarra-s'}>Already have an account?</Typography>
            <Button sx={{ fontFamily: "'Ibarra Real Nova', serif", color: '#FF8E00', p: 0, marginLeft: '10px', ":hover": {color: '#FFB353'} }} onClick={handleNavigateSignIn}>Sign In</Button>
          </Box>    
        </Box>
      </Card>
    </div>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default SignUpCard;