import './DndButton.css';
import button_default from '../../utility/img/button_default.webp';
import button_frame from '../../utility/img/button_frame.webp';

const DndButton = ({ width, height, text, onClick }) => {

  return (
    <div class="container">
      <img src={button_default} alt="Avatar" class="frame" />
      <img src={button_frame} alt="Avatar" class="frameOverlay" />
    </div>
  );
};

export default DndButton;
