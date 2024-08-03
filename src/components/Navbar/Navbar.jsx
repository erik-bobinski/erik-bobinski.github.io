import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        &lt;Erik Bobinski /&gt;
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-button">
        <a href="https://drive.google.com/file/d/1wu1B5orfid_TDc-uvuURZer4EDqXY6lS/view?usp=sharing"
        target="_blank" rel="noopener noreferrer">
        <>View Resume</>
        </a>
      </div>
    </div>
  );
};

export default Navbar