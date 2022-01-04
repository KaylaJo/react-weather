import React, { useState } from "react";
import Weather from "./Weather.js";
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
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
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
    let apiUrl = `https:///api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="searchBar">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="search"
                className="Form col-12"
                placeholder="Search by city..."
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button type="submit" className="Button col">
                <img
                  src="./icons/search.png"
                  className="searchIcons"
                  alt="search icon"
                />
              </button>
              <button type="submit" className="Button col">
                <img
                  src="./icons/location.png"
                  alt="location icon"
                  className="searchIcons"
                />
              </button>
            </div>
          </form>
        </div>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    searchForm();
    return "Loading...";
  }
}
