import { TextField } from '@mui/material';
import { styled } from '@mui/system'

const CssSelectField = styled(TextField)({
  minWidth: '150px',
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
      border: '2px solid #CECECE',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#FF8E00',
    fontFamily: "'Ibarra Real Nova', serif",
    paddingTop: '4.5px',
  },
  '& .MuiInputBase-input': {
    paddingTop: '20px',
    paddingBottom: '13px',
    fontFamily: "'Ibarra Real Nova', serif",
  },
  '& .MuiSelect-icon': { 
    color: '#FF8E00'
  },
  '& .MuiSelect-iconOpen': {
    color: '#FFBB50'
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

export default CssSelectField;