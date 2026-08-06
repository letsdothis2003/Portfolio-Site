import React from 'react';
import { Link } from 'react-router-dom';
import { SwitchMode } from '../SwitchMode/SwitchMode';
import './Navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav_links');
    if (navLinks) navLinks.classList.toggle('show');
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-text">
          <strong>Fahim Tanvir</strong>
        </div>
      </div>

      <div className="nav-controls">
        <ul className="nav_links">
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Portfolio/My Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>

        <div className="nav-switch">
          <SwitchMode theme={theme} setTheme={setTheme} width={112} height={56} />
        </div>
      </div>

      <button id="mobile" onClick={toggleMenu} aria-label="Toggle navigation menu">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;