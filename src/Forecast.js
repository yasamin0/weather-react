import React from "react";
import ForecastEachDay from "./ForecastEachDay";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast() {
  return (
    <div className="col-md-7 app forecast-card row">
      <div className="col-1"></div>
      <ForecastEachDay day="Mon" cond="Clouds" Htemp="34" Ltemp="24" />
      <ForecastEachDay day="Tue" cond="Clouds" Htemp="34" Ltemp="24" />
      <ForecastEachDay day="Wed" cond="Clouds" Htemp="34" Ltemp="24" />
      <ForecastEachDay day="Thu" cond="Clouds" Htemp="34" Ltemp="24" />
      <ForecastEachDay day="Fri" cond="Clouds" Htemp="34" Ltemp="24" />
    </div>
  );
}
