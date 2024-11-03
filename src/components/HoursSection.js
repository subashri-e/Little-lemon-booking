import React from 'react';
import './HoursSection.css';

function HoursSection() {
  return (
    <div className="hours-section">
      <h3>Opening Hours</h3>
      <img src="hours-image-url" alt="Opening Hours" />
      <p>Mon - Fri: 2pm - 10pm</p>
      <p>Sat: 2pm - 11pm</p>
      <p>Sun: 2pm - 9pm</p>
    </div>
  );
}

export default HoursSection;
