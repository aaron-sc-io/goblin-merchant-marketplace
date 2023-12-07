import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const CssTextField = styled(TextField)({
  backgroundColor: 'black',
  '& .MuiOutlinedInput-root': {
    borderRadius: '0',
    '& fieldset': {
      borderColor: 'darkgrey',
    },
    '&:hover fieldset': {
      border: '2px solid #CECECE',
    },
    '&.Mui-focused fieldset': {
      border: '3px solid #CECECE', 
    },
  },
  '& .MuiInputLabel-root': {
    color: '#FF8E00',
    fontFamily: "'Ibarra Real Nova', serif",
    paddingTop: '4.5px',
  },
  '& .MuiInputBase-input': {
    color: '#CECECE',
    paddingTop: '20px',
    paddingBottom: '13px',
    fontFamily: "'Ibarra Real Nova', serif",
  },
  /* styling that hides legend when input is focused */
  '& .MuiInputLabel-shrink': { 
    display: 'none'
  },
  '& legend': {
    display: 'none'
  },
  '& .MuiOutlinedInput-notchedOutline': { 
    top: 0
  }
});

export default CssTextField;