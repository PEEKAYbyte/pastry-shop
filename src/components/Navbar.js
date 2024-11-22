import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on mobile
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        
        <a href="/"><img src="mainlogo.jpeg" alt="Pastry Shop Logo" /> </a>
      </div>

      <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/special-cakes">Special Cakes</a></li>
          <li><a href="/findus">Find Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="navbar-actions">
        <button className="search-button">🔍</button> {/* Search icon */}
        <button className="order-button">Order Online</button>
      </div>

      <div className="menu-toggle" onClick={handleMenuToggle}>
        ☰ {/* Hamburger menu for mobile view */}
      </div>
    </nav>
  );
};

export default Navbar;
