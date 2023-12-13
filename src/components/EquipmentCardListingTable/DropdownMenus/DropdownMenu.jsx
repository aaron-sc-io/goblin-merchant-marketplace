import { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const dropdownStyles = {
    maxHeight: isOpen ? '200px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.2s ease-out',
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-toggle' onClick={toggleDropdown}>
        Select an Option
      </div>
      <div style={dropdownStyles}>
        <div> fill </div>
        <div> fill </div>
        <div> fill </div>
        <div> fill </div>
        <div> fill </div>
        <div> fill </div>
        <div> fill </div>
        <div> fill </div>
      </div>
      {selectedOption && (
        <p>You have selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default DropdownMenu;