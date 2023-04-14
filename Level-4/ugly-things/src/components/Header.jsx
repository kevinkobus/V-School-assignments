import React from "react";
import { Context } from "./Context";

function Header(props) {
  const { colorTheme, toggleTheme } = useContext(Context);

  return (
    <div className={`${color}-theme`} id="header">
      <h1 className="title">Beauty is in the eye of the beholder</h1>
      <button className={`${color}-theme`} id="theme-btn" onClick={toggleTheme}>
        Color Theme
      </button>
    </div>
  );
}

export default Header;
