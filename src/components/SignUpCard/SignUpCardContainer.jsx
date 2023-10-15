import { useNavigate } from 'react-router-dom';
import SignUpCard from './SignUpCard';
import { Box } from '@mui/material';

const SignUpCardContainer = () => {
  const navigate = useNavigate();
  const handleNavigateRoot = () => {
    navigate('/');
  };
  const handleNavigateSignIn = () => {
    navigate('/signin');
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', py: 5 }}>
      <SignUpCard 
        handleNavigateRoot={handleNavigateRoot}
        handleNavigateSignIn={handleNavigateSignIn}
      />
    </Box>
  );
}

export default SignUpCardContainer