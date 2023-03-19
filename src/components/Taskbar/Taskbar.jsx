import { TextField, Box, Button, Typography, ButtonGroup, Select, MenuItem, InputLabel } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';

const Taskbar = ({ handleClick }) => {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '38px', backgroundColor: "#D3D3D3" }}>
      <Box sx={{ display: 'flex', justifyContent: 'in-between' }}>


        
        
        <Typography style={{ marginRight: 450 }}>
          <Button sx={{ color:"black" }} >
            <HomeIcon onClick={handleClick}></HomeIcon>
          </Button> 
        </Typography>

        <Typography style={{ marginRight: 450 }}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button onClick={handleClick}>One</Button>
            <Button onClick={handleClick}>Two</Button>
            <Button onClick={handleClick}>Three</Button>
          </ButtonGroup>
        </Typography>

        <Typography>

          <Button sx={{ color: "black" }}>
            <FaceIcon onClick={handleClick}></FaceIcon>
          </Button>
        </Typography>

        
    

      </Box>

      

    </Box>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default Taskbar;