import React from "react";
import "./style.css";

export default function Time() {
  return (
    <div className="col-md-3 app time-card">
      <p>
        <i className="fa-solid fa-clock"></i> local time :<br />
        18:00
      </p>
      <p>
        <i className="fa-solid fa-clock"></i> London time :<br />
        12:00
      </p>
    </div>
  );
}
