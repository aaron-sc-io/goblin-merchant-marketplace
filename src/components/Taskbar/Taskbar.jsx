import { Box } from '@mui/material';
import DndButton from '../DndButton/DndButton';

const Taskbar = ({ handleSignOutClick, handleNewSubmitClick, handleHomeClick, handleSignInClick, userIsSignedIn }) => {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '85px', width: '100vw', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
      <DndButton text={'HOME'} onClick={handleHomeClick}/>
      <DndButton text={'CREATE NEW LISTING'} onClick={handleNewSubmitClick} disabled={!userIsSignedIn} sizeVariant={2}/>
      {userIsSignedIn
      ? <DndButton text={'SIGN OUT'} onClick={handleSignOutClick}/>
      : <DndButton text={'SIGN IN'} onClick={handleSignInClick}/>}
    </Box>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default Taskbar;