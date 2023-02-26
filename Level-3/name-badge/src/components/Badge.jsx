import { useState } from "react"

function Badge() {
    return (
        <main className="badge-container">
            <header className="badge-header">
                <p id="badge">Badge:</p>
            </header>
            <div className="badge-info">
                <div className="info" id="name">Name: Bob Marley</div>
                
                <div className="info" id="phone">Phone: 123-456-7899</div>

                <div className="info" id="placeOfBirth">Place of Birth: Jamaica</div>

                <div className="info" id="favoriteFood">Favorite food: Jerk Chicken</div>

                <div className="info" id="email">Email: bobm@reggae.com</div>

                <div className="info" id="comments"></div>
            </div>
        </main>
    )
}

export default Badge