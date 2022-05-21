import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="navContainer">
      <nav>
        <i class="fa-brands fa-apple"></i>
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="#">HOME</a>
          </li>
          <li className="nav-li">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="nav-li">
            <a href="#project">PROJECTS</a>
          </li>
          <li className="nav-li">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-li">
            <a className="contact" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;