import React from "react";
import "./style.css";

export default function WeatherDetails() {
  return (
    <div className="col-md-4 app weather-details-card">
      <p>
        <i className="fa-solid fa-temperature-half"></i> feels like : 20
      </p>
      <p>
        <i className="fa-solid fa-droplet"></i> humidity : 45
      </p>
      <p>
        <i className="fa-solid fa-wind"></i> wind : 22
      </p>
      <p>
        <i className="fa-solid fa-gauge-high"></i> pressure : 20
      </p>
    </div>
  );
}
