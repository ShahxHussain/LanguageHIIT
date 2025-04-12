import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Navbar.css';
import { Menu, X, Home, Users, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/team', label: 'Team', icon: <Users size={20} /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">LanguageHIIT</span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="navbar-buttons">
          <Link to="/signup" className="nav-button signup-button">
            <UserPlus size={20} />
            <span>Sign Up</span>
          </Link>
          <Link to="/login" className="nav-button login-button">
            <LogIn size={20} />
            <span>Log In</span>
          </Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
