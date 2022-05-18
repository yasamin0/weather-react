import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import MainCityInfo from "./MainCityInfo";
import Forecast from "./Forecast";
import DayInfoDet from "./DayInfoDet";
import WeatherDetails from "./WeatherDetails";
import Time from "./Time";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src="/images/rain.mp4" type="video/mp4" />
      </video>
      <div className="main-app">
        <div className="row main-row">
          <MainCityInfo />
          <Forecast />
          <DayInfoDet />
          <WeatherDetails />
          <Time />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
