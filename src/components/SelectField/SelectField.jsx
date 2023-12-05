import '../../utility/styles/ibarraFont.css';
import { TextField } from '@mui/material';

const CustomSelectField = ({ ...props }) => {
  return (
    <TextField
      label={props.label}
      name={props.name}
      type={props.type}
      select
    />
  );
};

export default CustomSelectField;
