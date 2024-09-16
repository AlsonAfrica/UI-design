// src/components/Popup.js
import React from 'react';
import './popup.css';

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Popup;
