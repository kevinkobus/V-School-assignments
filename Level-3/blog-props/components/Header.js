import React from "react"
import Navbar from "./Navbar"

export default function Header () {
    return (
        <header className="header-container">
            <Navbar />
            <h1 id="page-title">CLEAN BLOG</h1>
            <h3 id="page-description">A Blog Theme by Start Bootstrap</h3> 
        </header>    
    )
}