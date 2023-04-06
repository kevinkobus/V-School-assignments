import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Header(props) {
  // const context = useContext(ThemeContext);
  // destructure
  const { color } = useContext(ThemeContext);

  return (
    // <div className={`${context.color}-theme`}>
    // destructure
    <div className={`${color}-theme`}>
      <h2>Theme Context</h2>
      {/* <h3>You are currently using {context.color} mode</h3> */}
    // destructure
      <h3>You are currently using {color} mode</h3>
    </div>
  );
}

export default Header;
