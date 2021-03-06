import React, { useState } from "react";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    let now = new Date();
    let localTime = now.getTime();
    let localOffset = now.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let local = utc + 1000 * response.data.timezone;

    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      time: new Date(local),
      humidity: response.data.main.humidity,
      icon: `./icons/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchForm();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchForm() {
    const apiKey = "58a6775f97527351bf6c6966e209be39";
    let apiUrl = `https:///api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="searchBar">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <input
                type="search"
                className="Form col-9"
                placeholder="Search by city..."
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button type="submit" className="Button col-2">
                <img
                  src="./icons/search.png"
                  className="searchIcons"
                  alt="search icon"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="allWeather">
          <Weather data={weatherData} />
          <Forecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    searchForm();
    return "Loading...";
  }
}
