// src/components/Navbar.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('user') !== null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/dashboard', label: 'Dashboard' },
    ...(isAuthenticated ? [{ to: '/admin', label: 'Admin' }] : []),
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/" className="brand-link">
            🚀 MyApp
          </NavLink>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          
          {isAuthenticated ? (
            <button className="nav-button logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button 
              className="nav-button login"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;