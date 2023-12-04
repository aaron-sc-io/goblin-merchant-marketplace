import '../../utility/ibarraFont.css';
import { TextField  } from '@mui/material';
import { styled } from '@mui/system';

const CssTextField = styled(TextField)({
  backgroundColor: 'black',
  '& .MuiOutlinedInput-root': {
    borderRadius: '0',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
      borderBottom: '2px solid #CECECE',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
      borderBottom: '3px solid #CECECE', 
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
  '& .MuiInputLabel-shrink': { opacity: 0 }
});

const CustomTextField = ({ ...props }) => {
  return (
    <CssTextField
      label={props.label}
      name={props.name}
      type={props.type}
      inputProps={{ style: { color: '#CECECE' }}}
      InputLabelProps={{ disableAnimation: true }}
      onChange={props.onChange}
    />
  );
};

export default CustomTextField;
