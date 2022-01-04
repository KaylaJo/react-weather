import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weatherContainer">
        <h1 className="cityName">Chicago</h1>
        <span className="time">Sun, Dec 5, 19:32</span>
        <div className="row temperatureContainer">
          <div className="col-md-6 Temperature">
            <h2 className="todayTemp">{temperature}</h2>
            <span className="degreeUnits">°C</span>
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
  } else {
    let apiKey = "58a6775f97527351bf6c6966e209be39";
    let city = "London";
    let apiUrl = `https:///api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
