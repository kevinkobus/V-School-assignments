import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Button(props) {
  // const context = useContext(ThemeContext)
  // destructure
  const { color, toggleTheme } = useContext(ThemeContext);

  return (
    // <button className={`${context.color}-theme`} onClick={context.toggleTheme}>Change Theme</button>
    // destructure
    <button className={`${color}-theme`} onClick={toggleTheme}>
      Change Theme
    </button>
  );
}

export default Button;
