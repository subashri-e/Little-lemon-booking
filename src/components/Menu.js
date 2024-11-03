import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src="https://via.placeholder.com/150" alt="Dish" />
          <h3>Grilled Chicken Skewers</h3>
          <p>Delicious grilled chicken with spices and herbs.</p>
          <p>$12.99</p>
        </div>
        <div className="menu-item">
          <img src="https://via.placeholder.com/150" alt="Dish" />
          <h3>Caesar Salad</h3>
          <p>Fresh romaine lettuce with Caesar dressing.</p>
          <p>$8.99</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
