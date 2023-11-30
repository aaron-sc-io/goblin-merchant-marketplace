import './DndButton.css';
import button_default from '../../utility/img/button_default_cropped.webp';
import button_frame from '../../utility/img/button_frame.webp';

const DndButton = ({ disabled, sizeVariant, text, onClick }) => {
  return (
    <button class="button" disabled={disabled} onClick={onClick}>
      <div class="container">
        <div class="button-text">{text}</div>
        <img src={button_default} alt="Avatar" class="frame" />
        <img src={button_frame} alt="Avatar" class="frameOverlay" />
        <div class="color-overlay"/>
      </div>
    </button>
  );
};

export default DndButton;
