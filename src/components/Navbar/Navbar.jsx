import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const toggleMenu = () => {
    document.querySelector('.nav_links').classList.toggle('show');
  };

  

  return (
    <nav className="navbar">
      <h1 className="logo">Fahim Tanvir</h1>
      <div id="mobile" onClick={toggleMenu}>☰</div>
      <ul className="nav_links">
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/projects">Portfolio/My Projects</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
