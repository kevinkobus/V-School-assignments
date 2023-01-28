import React from "react"

export default function Card(props) {
  return (
    <div className={props.timeToGo} id="card">
      <section className="info-section">
        <h1 id="place">{props.place}</h1>
        <h2 id="price">Cost: ${props.price}</h2>
        <h2 id="timeToGo">Best time to go is: {props.timeToGo}</h2>
      </section>
    </div>
  );
}
