import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const searchInputRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdowns and mobile menu on link click
  const handleLinkClick = (section) => {
    setActiveLink(section);
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.profile-dropdown') &&
        !event.target.closest('.profile-icon')
      ) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}
      <nav className={`navbar sticky`} role="navigation" aria-label="Main navigation">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-links"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul id="navbar-links" className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/"
              onClick={() => handleLinkClick('home')}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleLinkClick('about')}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              onClick={() => handleLinkClick('reviews')}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => handleLinkClick('services')}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleLinkClick('contact')}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
          <li className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search"
              ref={searchInputRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  alert(`Search for: ${e.target.value}`);
                }
              }}
            />
          </li>
          <li className="profile-icon" aria-haspopup="true" aria-expanded={isProfileDropdownOpen}>
            <button
              onClick={toggleProfileDropdown}
              aria-label="Toggle profile menu"
              aria-controls="profile-dropdown"
            >
              <img
                src="https://www.gravatar.com/avatar/?d=mp&s=32"
                alt="User Profile"
                className="profile-image"
              />
            </button>
            {isProfileDropdownOpen && (
              <ul id="profile-dropdown" className="profile-dropdown" role="menu">
                <li role="none">
                  <NavLink to="/profile" role="menuitem" onClick={() => setIsProfileDropdownOpen(false)}>
                    Profile
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/settings" role="menuitem" onClick={() => setIsProfileDropdownOpen(false)}>
                    Settings
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink to="/logout" role="menuitem" onClick={() => setIsProfileDropdownOpen(false)}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
