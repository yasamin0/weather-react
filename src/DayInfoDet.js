import React from "react";
import "./style.css";

export default function DayInfoDet() {
  return (
    <div className="col-md-4 app day-info-card">
      <span>
        <h5>
          <i className="fa-regular fa-calendar"></i> Sunday
        </h5>
        <h5>
          <i className="fa-solid fa-calendar-day"></i> April 24 , 2022
        </h5>
      </span>
    </div>
  );
}
