import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav_links');
    if (navLinks) navLinks.classList.toggle('show');
  };

  // Got a ripple effect idea from a Udemy course
  const handleRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Position the ripple depending on user click
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple-effect");

    // Remove ripples after they pop out
    const existingRipple = button.getElementsByClassName("ripple-effect")[0];
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Fahim Tanvir</h1>
      <div id="mobile" onClick={toggleMenu}>☰</div>
      <ul className="nav_links">
        <li className="ripple-container" onClick={handleRipple}>
          <Link to="/">About Me</Link>
        </li>
        <li className="ripple-container" onClick={handleRipple}>
          <Link to="/projects">Portfolio/My Projects</Link>
        </li>
        <li className="ripple-container" onClick={handleRipple}>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;