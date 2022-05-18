import React from "react";
import { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
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
  );
}
