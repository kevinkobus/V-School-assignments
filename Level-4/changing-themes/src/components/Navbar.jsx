import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {

  const {color} = useContext(ThemeContext)

  return (
    <nav className={`${color}-theme`} id="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">HOME</li>
        <li className="navbar-item">ABOUT</li>
        <li className="navbar-item">PROJECTS</li>
        <li className="navbar-item">CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
