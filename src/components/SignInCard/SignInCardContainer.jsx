import { useNavigate } from 'react-router-dom';
import SignInCard from './SignInCard';
import { Box } from '@mui/material';

const SignInCardContainer = () => {
  const navigate = useNavigate();
  const handleNavigateRoot = () => {
    navigate('/');
  };
  const handleNavigateForgotPass = () => {
    navigate('/password-reset');
  };
  const handleNavigateCreateAccount = () => {
    navigate('/signup');
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', py: 5 }}>
      <SignInCard
        handleNavigateRoot={handleNavigateRoot}
        handleNavigateForgotPass={handleNavigateForgotPass}
        handleNavigateCreateAccount={handleNavigateCreateAccount}
      />
    </Box>
  );
}

export default SignInCardContainer