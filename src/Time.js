import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Time(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="col-md-3 app time-card">
      <p>
        <i className="fa-solid fa-clock"></i> local time :<br />
        {hours}:{minutes}
      </p>
      <p>
        <i className="fa-solid fa-clock"></i> London time :<br />
        12:00
      </p>
    </div>
  );
}
