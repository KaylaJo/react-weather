import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      time: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      icon: "./icons/01d.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weatherContainer">
        <h1 className="cityName">{weatherData.city}</h1>
        <span className="time">
          <FormattedDate time={weatherData.time} />
        </span>
        <div className="row temperatureContainer">
          <div className="col-md-6 Temperature">
            <h2 className="todayTemp">{Math.round(weatherData.temperature)}</h2>
            <span className="degreeUnits">°C</span>
          </div>
          <div className=" col-md-6 infoContainer">
            <h3 className="weatherType text-capitalize">
              {weatherData.description}
            </h3>
            <span className="mainIcon">
              <img
                src={weatherData.icon}
                className="searchIcons"
                alt={weatherData.description}
              />
            </span>
            <h4 className="humidity">Humidity:{weatherData.humidity}%</h4>
            <p className="windSpeed">WindSpeed: {weatherData.wind}km/h</p>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    let apiKey = "58a6775f97527351bf6c6966e209be39";
    let apiUrl = `https:///api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
