import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

export default function MainCityInfo(props) {
  return (
    <div>
      {" "}
      <div className="row">
        <div className="col-6">
          <h4 className="text-center">{props.city}</h4>
        </div>
        <div className="col-6">
          <h4 className="text-center">6 C|F</h4>
        </div>
      </div>
      <img src="/images/clouds.gif" className="head-img" alt="Img" />
      <h5 className="text-center">Clouds</h5>
      <div className="row">
        <div className="col-6 text-center">
          <h5 className="text-center">
            <span className="font-weight-bold">
              <i className="fa-solid fa-temperature-half text-danger"></i>
            </span>
            34
          </h5>
        </div>
        <div className="col-6 text-center">
          <h5 className="text-center">
            <span className="text-primary font-weight-bold">
              <i className="fa-solid fa-temperature-half text-primary"></i>
            </span>
            24
          </h5>
        </div>
      </div>
    </div>
  );
}
