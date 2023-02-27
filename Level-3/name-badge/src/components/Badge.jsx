import React from "react";

function Badge(props) {
  return (
    <main className="badge-container">
      <header className="badge-header">
        <p id="badge">Badge:</p>
      </header>
      <div className="badge-info">
        <div className="info" id="name">
          {`Name: ${props.person.firstName} ${props.person.lastName}`}
        </div>

        <div className="info" id="phone">
          Phone: {props.person.phone}
        </div>

        <div className="info" id="placeOfBirth">
          Place of Birth: {props.person.placeOfBirth}
        </div>

        <div className="info" id="favoriteFood">
          Favorite food: {props.person.favoriteFood}
        </div>

        <div className="info" id="email">
          Email: {props.person.email}
        </div>

        <textarea className="info" id="badgeComments">
          {props.person.comments}
        </textarea>
      </div>
    </main>
    
  );
}

export default Badge;