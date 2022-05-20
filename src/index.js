import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "../static/src/style.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Forecast from "./Forecast";
import DayInfoDet from "./DayInfoDet";
import WeatherDetails from "./WeatherDetails";
import Time from "./Time";
import MainCityInfo from "./MainCityInfo";

function App() {
  let [city, setCity] = useState("london");

  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log(response);
  }

  function search() {
    const apiKey = "0cf110a0d3901b43d101004553f09b93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleCityChange(event) {
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
              <form className="input-group mb-3 mt-2" onSubmit={handleSubmit}>
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa-regular fa-compass"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Enter a city.."
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <div className="input-group-append">
                  <input
                    type="submit"
                    value="search"
                    className="input-group-text"
                  ></input>
                </div>
              </form>

              <MainCityInfo data={weatherData} />
            </div>
            <Forecast coordinates={weatherData.coordinates} />
            <DayInfoDet date={weatherData.date} />
            <WeatherDetails data={weatherData} />
            <Time date={weatherData.date} />
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "loading";
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
