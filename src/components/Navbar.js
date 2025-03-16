import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">LanguageHIIT</div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/events">Events</Link>
        <Link to="/team">Team</Link>
      </div>
      <div className="navbar-buttons">
        <Link to= '/signup'>
        <button className="sign-up">Sign up</button>
        </Link>
        <Link to= '/login'>
        <button className="log-in">Log In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
