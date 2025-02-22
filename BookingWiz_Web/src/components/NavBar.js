import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">BookingWiz</Link>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/Hotels" className="navbar-item" onClick={() => setMenuOpen(false)}>Hotels</Link>
          <Link to="/Flights" className="navbar-item" onClick={() => setMenuOpen(false)}>Flights</Link>
          <Link to="/Reservation" className="navbar-item" onClick={() => setMenuOpen(false)}>Reservation</Link>
          <div className="navbar-account">A</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
