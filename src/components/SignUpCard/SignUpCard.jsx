import { TextField, Box, Button } from '@mui/material';

const SignUpCard = ({ handleClick }) => {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
      <TextField id="filled-basic" label="Email Address" variant="filled" />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      <Button variant="contained" onClick={handleClick}>Sign Up</Button>
    </Box>
  );
};


// toolbar on top with buttons and such with height of 75 maybe



export default SignUpCard;