import '../../utility/styles/ibarraFont.css';
import CssTextField from './CssTextField';

const CustomTextField = ({ ...props }) => {
  return (
    <CssTextField
      label={props.label}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default CustomTextField;
