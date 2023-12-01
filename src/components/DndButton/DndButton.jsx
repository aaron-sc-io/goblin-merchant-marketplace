import './DndButton.css';
import button_default from '../../utility/img/button_default.webp';
import button_default_highlight from '../../utility/img/button_default_highlight.webp';
import button_frame from '../../utility/img/button_frame.webp';

const DndButton = ({ disabled, sizeVariant, text, onClick }) => {
  return (
    <button class="button" disabled={disabled} onClick={onClick}>
      <div class="container">
        <img src={button_default_highlight} alt="Avatar" class="button-default-highlight" />
        <div class="button-text">{text}</div>
        <img src={button_default} alt="Avatar" class="frame" />
        <img src={button_frame} alt="Avatar" class="frame-overlay" />

      </div>
    </button>
  );
};

export default DndButton;
