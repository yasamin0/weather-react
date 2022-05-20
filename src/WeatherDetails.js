import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherDetails(props) {
  return (
    <div className="col-md-4 app weather-details-card">
      <p>
        <i className="fa-solid fa-temperature-half"></i> feels like :{" "}
        {Math.round(props.data.feelsLike)}
      </p>
      <p>
        <i className="fa-solid fa-droplet"></i> humidity : {props.data.humidity}
      </p>
      <p>
        <i className="fa-solid fa-wind"></i> wind : {props.data.wind}
      </p>
      <p>
        <i className="fa-solid fa-gauge-high"></i> pressure :{" "}
        {props.data.pressure}
      </p>
    </div>
  );
}
