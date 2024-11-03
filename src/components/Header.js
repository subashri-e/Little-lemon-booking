import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is included
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">LITTLE LEMON</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="src\components\Home.js">Home</Link></li>
          <li><Link to="src\components\Menu.js">Menu</Link></li>
          <li><Link to="src\components\Booking.js">Book</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

