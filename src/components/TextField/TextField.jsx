import '../../utility/ibarraFont.css';
import { TextField  } from '@mui/material';
import { styled } from '@mui/system';

const CssTextField = styled(TextField)({
  backgroundColor: '#CECECE', // Grey background
  '& .MuiOutlinedInput-root': {
    borderRadius: '0',
    '& fieldset': {
      borderColor: 'transparent', // No border color initially
    },
    '&:hover fieldset': {
      borderColor: 'transparent', // Remove border on hover
      borderBottom: '1px solid black', // Saddle brown bottom border
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent', // Remove border on focus
      borderBottom: '3px solid black', 
    },
  },
  '& .MuiInputLabel-root': {
    color: 'black', // Darker saddle brown label color
    fontFamily: 'Cinzel Decorative, cursive', // Medieval-style font
    '&:Mui-focused': {
      backgroundColor: 'red'
    }
  },
});

const CustomTextField = ({ ...props }) => {
  return (
    <CssTextField
      label={props.label}
      name={props.name}
      type={props.type}
      inputProps={{ style: { fontFamily: 'nunito', color: 'black', className: 'ibarra' } }}
      InputLabelProps={{ disableAnimation:'true', onfocus: { display: 'none' } }}
    />
  );
};

export default CustomTextField;
