import React from "react";
import "../static/css/style.css";
import "bootstrap/dist/css/bootstrap.css";

export default function ForecastEachDay(props) {
  return (
    <div className="col-2">
      <br />
      <h5 className="text-center">{props.day}</h5>
      <img src="/images/clouds.gif" alt="Img" className="days-icons" />
      <h5 className="text-center">{props.cond}</h5>

      <p className="text-center">
        <span className="text-inline">
          <i className="fa-solid fa-temperature-half text-danger"></i>
          {props.Htemp}
        </span>
      </p>
      <p className="text-center">
        <span className="text-primary">
          <i className="fa-solid fa-temperature-half text-primary"></i>
        </span>
        {props.Ltemp}
      </p>
      <br />
    </div>
  );
}
