// src/components/Popup.js
import React from 'react';


const Popup = ({ togglePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Learn How</h2>
        <p>Here’s how we bring teams together...</p>
        <button onClick={togglePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
