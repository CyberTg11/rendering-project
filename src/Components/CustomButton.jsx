import React from 'react';
import './CustomButton.css';

const CustomButton = ({ text, warnMessage, hint }) => {
  const handleClick = () => {
    if (warnMessage) {
      alert(warnMessage);
    }
  };

  return (
    <button className={`custom-button ${warnMessage ? 'warning' : ''}`} onClick={handleClick} title={hint ? hint : ''}>
      {text}
    </button>
    
  );
};

export default CustomButton;