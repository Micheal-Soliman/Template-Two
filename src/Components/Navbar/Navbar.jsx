import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assests/logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} alt="logo" />
        <div className="links" onClick={() => setShowMenu(!showMenu)}>
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul className={showMenu && "show-menu"}>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
