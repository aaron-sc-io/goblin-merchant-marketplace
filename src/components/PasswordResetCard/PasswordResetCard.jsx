import { TextField, Box, Button, Card, Typography, Alert } from '@mui/material';
import DndButton from '../DndButton/DndButton';
import background from '../../utility/img/background.webp'
import cardFrame from '../../utility/img/inven_frame.webp'
import '../../utility/ibarraFont.css';

const PasswordResetCard = ({ handleForgotPassSubmit, handleNavigateSignIn, loading, error, message, setUsername }) => {
  console.log(message);
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: -15, left: -10, height: '530px', width: '320px' }}>
        <img src={cardFrame} alt="card-frame" draggable="false" style={{ width: '100%', height: '100%' }}/>
      </div>
      <Card sx={{ width: '300px', height: '500px', borderRadius: '30px', 
      backgroundImage: `url(${background})`, color: '#CECECE'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
          <Typography class={'ibarra-xl'}> Forgot Password? </Typography>
          <Typography class={'ibarra-s'}> Enter your email to reset </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField 
            id='email-address'
            label='Email Address'
            variant='filled'
            onChange={e => setUsername(e.target.value)}
            sx={{ width: '250px', my: 2}}
            inputProps={{ style: { background: '#CECECE' } }}
          />
          <Box>
            <DndButton text={'RESET'} onClick={handleForgotPassSubmit} disabled={loading}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center',  mt: 2, mb: 15}}>
            <Typography class={'ibarra-s'}>Already have an account?   </Typography>
            <Button onClick={handleNavigateSignIn}>Sign In</Button>
          </Box>  
        </Box>
      </Card>

    </div>
  )
}

export default PasswordResetCard;