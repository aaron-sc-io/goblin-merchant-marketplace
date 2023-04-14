import PasswordResetCard from './PasswordResetCard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { Box } from '@mui/material';


const PasswordResetCardContainer = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { handleResetPassword } = useAuth();
  const navigate = useNavigate();
  
  const handleNavigateSignIn = () => {
    navigate('/signin');
  };

  const handleForgotPassSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setMessage('');
      setLoading(true);
      const reset = await handleResetPassword(username);
      console.log(reset);
      handleNavigateSignIn();
    }
    catch (e) {
      setError('Failed to reset password.');
      console.log(e);
    }
    setLoading(false);
  }
  return (
    <Box>
      <PasswordResetCard
      handleForgotPassSubmit={handleForgotPassSubmit}
      handleNavigateSignIn={handleNavigateSignIn}
      error={error}
      loading={loading}
      message={message}
      setUsername={setUsername} />
    </Box>
    
  );
}

export default PasswordResetCardContainer;