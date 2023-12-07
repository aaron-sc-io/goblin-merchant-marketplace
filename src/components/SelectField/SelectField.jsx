import '../../utility/styles/ibarraFont.css';
import CssSelectField from './CssSelectField';

const CustomSelectField = ({ ...props }) => {
  return (
    <CssSelectField
      label={props.label}
      name={props.name}
      type={props.type}
      select
    />
  );
};

export default CustomSelectField;
