import { Box, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import DndButton from '../DndButton/DndButton';

const Taskbar = ({ handleSignOutClick, handleNewSubmitClick, handleHomeClick, handleSignInClick, userIsSignedIn }) => {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '50px', backgroundColor: '#D3D3D3', width: '1200px', justifyContent: 'space-between', alignItems: 'center' }}>
      <DndButton text={'HOME'} onClick={handleHomeClick}/>
      <Button sx={{ color: 'primary', width: '25%', height: '75%' }} variant='contained' onClick={handleNewSubmitClick} disabled={!userIsSignedIn}>
        <Typography sx={{ color: 'white' }}>CREATE NEW LISTING &nbsp;</Typography>
        <SendIcon sx={{ color: 'white' }} />
      </Button>
      {userIsSignedIn
      ? <DndButton text={'SIGN OUT'} onClick={handleSignOutClick}/>
      : <DndButton text={'SIGN IN'} onClick={handleSignInClick}/>}
    </Box>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default Taskbar;