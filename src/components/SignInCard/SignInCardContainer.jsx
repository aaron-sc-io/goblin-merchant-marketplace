import { useNavigate } from 'react-router-dom';
import SignInCard from './SignInCard';

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
    <SignInCard
      handleNavigateRoot={handleNavigateRoot}
      handleNavigateForgotPass={handleNavigateForgotPass}
      handleNavigateCreateAccount={handleNavigateCreateAccount}
    />
  )
}

export default SignInCardContainer