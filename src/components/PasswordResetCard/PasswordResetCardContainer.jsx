import PasswordResetCard from './PasswordResetCard';
import { useState } from 'react';
import { Box } from '@mui/material';

const PasswordResetCardContainer = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleForgotPassSubmit = () => {
    alert(username);
  };
  return (
    <Box>
      <PasswordResetCard
      handleForgotPassSubmit={handleForgotPassSubmit}
      error={error}
      loading={loading}
      setUsername={setUsername} />
    </Box>
    
  );
}

export default PasswordResetCardContainer;