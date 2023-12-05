import './DndButton.css';
import '../../utility/styles/ibarraFont.css'
import button_default from '../../utility/img/button_default.webp';
import button_default_highlight from '../../utility/img/button_default_highlight.webp';
import button_frame from '../../utility/img/button_frame.webp';

const DndButton = ({ disabled, sizeVariant, text, onClick }) => {
  let buttonSize = 'button-normal'
  let fontSize = 'ibarra'
  switch (sizeVariant) {
    case 1: 
      buttonSize = 'button-normal';
      fontSize = 'ibarra';
      break;
    case 2: 
      buttonSize = 'button-wide';
      fontSize = 'ibarra-l';
      break;
    case 3: 
      buttonSize = 'button-tall';
      fontSize = 'ibarra-xxl';
      break;
    default: break;
  }
  
  return (
    <button class={`button ${buttonSize} `} disabled={disabled} onClick={onClick}>
      <div class="container">
        <img src={button_default_highlight} alt="Avatar" class="button-default-highlight" draggable="false"/>
        <div class={`${fontSize} button-text letter-spacing`}>{text}</div>
        <img src={button_default} alt="Avatar" class="frame" draggable="false"/>
        <img src={button_frame} alt="Avatar" class="frame-overlay" draggable="false"/>
      </div>
    </button>
  );
};

export default DndButton;
