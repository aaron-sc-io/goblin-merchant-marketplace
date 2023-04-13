import { TextField, Box, Button, Card, Typography, Alert } from '@mui/material';

const PasswordResetCard = ({ handleForgotPassSubmit, loading, error, setUsername }) => {
  {/* Follow the structure of SignIn/SignUpCard and Container, and do not make a storybook file. You can view your changes via npm start, and navving to /password-reset */}
  return (
    <Card sx={{ width: '300px', minHeight: '350px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 25, mt: 7 }}> Forgot Password? </Typography>
        <Typography sx={{ fontSize: 15, mb: 2 }}> Enter your email to reset </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          id='email-address'
          label='Email Address'
          variant='filled'
          onChange={e => setUsername(e.target.value)}
          sx={{ width: '250px', my: 2 }}
          />
        <Button 
          variant='contained' 
          disabled={loading} 
          onClick={handleForgotPassSubmit}
          sx={{ width: '150px', mb: 0.5 }}
        >
          Reset
        </Button>
        {/* <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Button onClick={handleNavigateForgotPass} sx={{ textTransform: 'none', mb: 2 }}>
            <Typography sx={{ fontSize: 15 }}>Forgot Password? </Typography>
          </Button>
        </Box> */}
      </Box>
    </Card>
  )
}

export default PasswordResetCard;