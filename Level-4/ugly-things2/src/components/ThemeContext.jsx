// ThemeContext provides state for color theme changes in the Header and Footer components

import React, { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [color, setColor] = useState("green");

  const toggleTheme = () => {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  };

  return (
    <ThemeContext.Provider
      value={{
        color: color,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
