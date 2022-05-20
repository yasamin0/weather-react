import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

export default function DayInfoDet(props) {
  let allDays = [
    "Sunday ",
    "Monday ",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday ",
  ];

  let day = allDays[props.date.getDay()];
  return (
    <div className="col-md-4 app day-info-card">
      <span>
        <h5>
          <i className="fa-regular fa-calendar"></i> {day}
        </h5>
        <h5>
          <i className="fa-solid fa-calendar-day"></i> April 24 , 2022
        </h5>
      </span>
    </div>
  );
}
