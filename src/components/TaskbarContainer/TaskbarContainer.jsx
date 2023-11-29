import { Box, Card } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Taskbar from '../Taskbar/Taskbar';

const TaskbarContainer = () => {
  const [error, setError] = useState('');
  const { currentUser, handleSignout } = useAuth();
  const navigate = useNavigate();

  const handleSignOutClick = async (e) => {
    setError('');
    try {
      await handleSignout();
      navigate('/');
    } catch (e) {
      console.log(e);
      setError('Failed to log out');
    }
  };

  const handleNewSubmitClick = () => {
    navigate('/submit-listing');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Card>
        <Taskbar
          handleSignOutClick={handleSignOutClick}
          handleSignInClick={handleSignInClick}
          handleNewSubmitClick={handleNewSubmitClick}
          handleHomeClick={handleHomeClick}
          userIsSignedIn={(currentUser !== null)}
        />
      </Card>
    </Box>
  )
}

export default TaskbarContainer;