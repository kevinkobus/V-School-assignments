import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header(props) {
  const { color, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${color}-header`} id="header">
      <h1 className="title">Beauty is in the eye of the beholder</h1>
      <button
        className={`${color}-theme-btn`}
        id="theme-btn"
        onClick={toggleTheme}
      >
        Color Theme
      </button>
    </div>
  );
}

export default Header;
