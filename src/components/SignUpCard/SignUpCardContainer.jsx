import { useNavigate } from 'react-router-dom';
import SignUpCard from './SignUpCard';

const SignUpCardContainer = () => {
  const navigate = useNavigate();
  const handleNavigateRoot = () => {
    navigate('/');
  };
  const handleNavigateSignIn = () => {
    navigate('/signin');
  };
  return (
    <SignUpCard handleNavigateRoot={handleNavigateRoot} handleNavigateSignIn={handleNavigateSignIn} />
  )
}

export default SignUpCardContainer