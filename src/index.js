import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./Forecast";
import DayInfoDet from "./DayInfoDet";
import WeatherDetails from "./WeatherDetails";
import Time from "./Time";
import MainCityInfo from "./MainCityInfo";

function App() {
  let apiKey = "a94ab690eaf15d9347e2d7ea11287c43";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
  const [city, setCity] = useState("please enter a city");
  function submitHandle(event) {
    event.preventDefault();
    return city;
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src="/images/rain.mp4" type="video/mp4" />
      </video>
      <div className="main-app">
        <div className="row main-row">
          <div className="col-md-4 app weather-info-card">
            <form className="input-group mb-3 mt-2" onSubmit={submitHandle}>
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa-regular fa-compass"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                onChange={updateCity}
              />
              <div className="input-group-append">
                <input
                  type="submit"
                  value="search"
                  className="input-group-text"
                ></input>
              </div>
            </form>
            <MainCityInfo city={city}/>
          </div>
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
