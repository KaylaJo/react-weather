import React from "react";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weatherContainer">
      <h1 className="cityName">Chicago</h1>
      <span className="time">Sun, Dec 5, 19:32</span>
      <div className="row temperatureContainer">
        <div className="col-md-6 Temperature">
          <h2 className="todayTemp">80°</h2>
          <span className="degreeUnits">F</span>
        </div>
        <div className=" col-md-6 infoContainer">
          <h3 className="weatherType">Sunny</h3>
          <span className="mainIcon">
            <img
              src="./icons/01d.png"
              className="searchIcons"
              alt="search icon"
            />
          </span>
          <h4 className="humidity">Humidity: 10%</h4>
          <p className="windSpeed">WindSpeed: 5mph</p>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
