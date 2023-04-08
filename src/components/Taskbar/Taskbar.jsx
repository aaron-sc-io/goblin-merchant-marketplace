import { Box, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';

const Taskbar = ({ handleSignOutClick, handleNewSubmitClick, handleHomeClick, handleSignInClick, userIsSignedIn }) => {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '50px', backgroundColor: '#D3D3D3', width: '1200px', justifyContent: 'space-between', alignItems: 'center' }}>
      <Button sx={{ color:'primary', minWidth: '10%', height: '75%', ml: 0.75 }} variant='contained' onClick={handleHomeClick} >
        <HomeIcon />
      </Button> 
      <Button sx={{ color: 'primary', width: '25%', height: '75%' }} variant='contained' onClick={handleNewSubmitClick} disabled={!userIsSignedIn}>
        <Typography sx={{ color: 'white' }}>CREATE NEW LISTING &nbsp;</Typography>
        <SendIcon sx={{ color: 'white' }} />
      </Button>
      {userIsSignedIn
      ? <Button sx={{ color:'primary', minWidth: '10%', height: '75%', mr: 0.75 }} variant='contained' onClick={handleSignOutClick}>Sign Out</Button>
      : <Button sx={{ color:'primary', minWidth: '10%', height: '75%', mr: 0.75 }} variant='contained' onClick={handleSignInClick}>Sign In</Button>}
    </Box>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default Taskbar;