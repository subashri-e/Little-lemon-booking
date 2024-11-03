import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${name} on ${date} at ${time} for ${people} people`);
  };

  return (
    <div className="booking-page">
      <h2>Book a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <label>
          Number of People:
          <input
            type="number"
            value={people}
            min="1"
            onChange={(e) => setPeople(e.target.value)}
            required
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
