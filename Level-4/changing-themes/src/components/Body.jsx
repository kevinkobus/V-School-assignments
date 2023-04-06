import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Body() {

    const { color, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`${color}-theme`} id="body-container">
            <button className="btn" onClick={toggleTheme}>Click me if you're comfortable with change</button>
        </div>
    )
}

export default Body