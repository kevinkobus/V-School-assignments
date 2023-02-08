import React from "react";

function DiceBox() {
  return (
    <main className="dice-container">
      <div className="dice" id="dice-one">
        <span class="dot"></span>
      </div>
      <div className="dice" id="dice-two">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="dice" id="dice-three">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="dice" id="dice-four">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="dice" id="dice-five">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="dice" id="dice-six">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </main>
  );
}

export default DiceBox;
