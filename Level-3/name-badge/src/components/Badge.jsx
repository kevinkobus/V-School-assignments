import React from "react";

function Badge() {
  return (
    <main className="badge-container">
      <header className="badge-header">
        <p id="badge">Badge:</p>
      </header>
      <div className="badge-info">
        <div className="info" id="name">
          Name:{" "}
        </div>

        <div className="info" id="phone">
          Phone:{" "}
        </div>

        <div className="info" id="placeOfBirth">
          Place of Birth:{" "}
        </div>

        <div className="info" id="favoriteFood">
          Favorite food:{" "}
        </div>

        <div className="info" id="email">
          Email:{" "}
        </div>

        <div className="info" id="comments"></div>
      </div>
    </main>
  );
}

export default Badge;
