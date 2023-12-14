import '../../utility/styles/ibarraFont.css';
import './CustomAlert.css'
import ErrorIcon from '@mui/icons-material/ErrorOutline';
import WarningIcon from '@mui/icons-material/WarningAmber';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import CheckIcon from '@mui/icons-material/CheckCircleOutlined';

const CustomAlert = ({ severity, message }) => {
  return (
    <div class={`alert ibarra-s ${severity}`}>
      <div class={`alert-container`} >
        {severity === 'error' && <ErrorIcon/>}
        {severity === 'warning' && <WarningIcon/>}
        {severity === 'info' && <InfoIcon/>}
        {severity === 'success' && <CheckIcon/>}
      </div>
      <div class='alert-message'>{message}</div>
    </div>
  );
};

export default CustomAlert;
