import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <section className="card-image">
        <img
          src={`../images/${props.imageUrl}`}
          className="location-image"
          alt="location image"
        />
      </section>
      <section className="card-info">
        <div className="location-title">
          <img src="../images/location-mark.png" id="location-mark" />
          <span className="location" id="country">
            {props.location}
          </span>
          <a href={`${props.googleMapsUrl}`} className="location" id="map-link">
            View on Google Maps
          </a>
          <h1 id="title">{props.title}</h1>
        </div>
        <div className="dates-description">
          <span className="dates">{props.startDate} - </span>
          <span className="dates">{props.endDate}</span>
          <p id="description">{props.description}</p>
        </div>
      </section>
    </div>
  );
}
