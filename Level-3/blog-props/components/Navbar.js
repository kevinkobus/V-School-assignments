import React from "react"

export default function Navbar () {
    return (
        <nav className="navbar-container">
            <a className="navbar-links" id="start-bootstrap">Start Bootstrap</a>
            <div className="navbar">
                <a className="navbar-links" id="home">HOME</a>
                <a className="navbar-links" id="about">ABOUT</a>
                <a className="navbar-links" id="sample-post">SAMPLE POST</a>
                <a className="navbar-links" id="contact">CONTACT</a>
            </div>  
        </nav>
    )
}