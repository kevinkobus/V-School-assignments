import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Footer() {

    const {color} = useContext(ThemeContext)

    return (
        <footer className={`${color}-theme`} id="footer">
            <ul className="footer-list">
                <li className="footer-item">item 1</li>
                <li className="footer-item">item 2</li>
                <li className="footer-item">item 3</li>
            </ul>
        </footer>
    )
}

export default Footer