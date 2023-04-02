import { Box, Button, Card } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { currentUser, handleSignout } = useAuth();
  const navigate = useNavigate();

  const handleSignoutClick = async (e) => {
    setError('');
    
    try {
      await handleSignout();
      navigate('/signin');
    } catch (e) {
      console.log(e);
      setError('Failed to log out');
    }
  };

  return (
    <Card sx={{ width: 300 }}>
      <Box>
        <Button variant='outlined' onClick={handleSignoutClick}> Sign Out</Button>
      </Box>
    </Card>
  )
}

export default Dashboard;