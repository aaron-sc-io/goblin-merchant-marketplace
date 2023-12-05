import { Box, Button, Card, Typography, Alert } from '@mui/material';
import DndButton from '../DndButton/DndButton';
import background from '../../utility/img/background.webp'
import cardFrame from '../../utility/img/inven_frame.webp'
import CustomTextField from '../TextField/TextField';
import '../../utility/styles/ibarraFont.css';

const PasswordResetCard = ({ handleForgotPassSubmit, handleNavigateSignIn, loading, error, message, setUsername }) => {
  console.log(message);
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: -15, left: -10, height: '530px', width: '320px' }}>
        <img src={cardFrame} alt="card-frame" draggable="false" style={{ width: '100%', height: '100%' }}/>
      </div>
      <Card sx={{ width: '300px', height: '500px', borderRadius: '30px', 
      backgroundImage: `url(${background})`, color: '#CECECE' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
          <Box sx={{ mb: -1, mt: 4 }}>
            <Typography class={'ibarra-xl no-line-height'}> Forgot Password? </Typography>
          </Box>
          <Box sx={{ mb: 5 }}>
            <Typography class={'ibarra-s no-line-height'}> Enter your email to reset </Typography>
          </Box>
          {error && <Alert severity="error">{error}</Alert>}
          <CustomTextField 
            id='email-address'
            name='email-address'
            label='Email Address'
            onChange={e => setUsername(e.target.value)}
          />
          <Box sx={{ mt: 5 }}>
            <DndButton text={'RESET'} onClick={handleForgotPassSubmit} disabled={loading}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography class={'ibarra-s'}>Already have an account?</Typography>
            <Button sx={{ fontFamily: "'Ibarra Real Nova', serif", color: '#FF8E00', p: 0, marginLeft: '10px', ":hover": {color: '#FFB353'} }} onClick={handleNavigateSignIn}>Sign In</Button>
          </Box>  
        </Box>
      </Card>
    </div>
  )
}

export default PasswordResetCard;