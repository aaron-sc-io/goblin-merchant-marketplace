import { TextField, Box, Button, Card, Typography, Alert } from '@mui/material';
import DndButton from '../DndButton/DndButton';

const PasswordResetCard = ({ handleForgotPassSubmit, handleNavigateSignIn, loading, error, setUsername }) => {
  return (
    <Card sx={{ width: '300px', height: '500px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 30, mt: 3 }}> Forgot Password? </Typography>
        <Typography sx={{ fontSize: 15, mb: 3 }}> Enter your email to reset </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          id='email-address'
          label='Email Address'
          variant='filled'
          onChange={e => setUsername(e.target.value)}
          sx={{ width: '250px', my: 2 }}
        />
        <DndButton text={'RESET'} onClick={handleForgotPassSubmit} disabled={loading}/>
        <Box sx={{ display: 'flex', alignItems: 'center',  mt: 2, mb: 15 }}>
          <Typography sx={{ fontSize: 15 }}> Already have an account? </Typography>
          <Button onClick={handleNavigateSignIn}> Sign In </Button>
        </Box>  
      </Box>
    </Card>
  )
}

export default PasswordResetCard;