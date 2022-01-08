import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays.js";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [timezone, setTimezone] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setTimezone(response.data.timezone_offset);
    setLoaded(true);
  }

  function load() {
    const apiKey = "58a6775f97527351bf6c6966e209be39";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div id="weekAhead-Forecast" className="container">
        <div className="row weekAhead">
          <ForecastDays data={forecast[1]} newtimezone={timezone} />
          <ForecastDays data={forecast[2]} newtimezone={timezone} />
          <ForecastDays data={forecast[3]} newtimezone={timezone} />
          <ForecastDays data={forecast[4]} newtimezone={timezone} />
          <ForecastDays data={forecast[5]} newtimezone={timezone} />
          <ForecastDays data={forecast[6]} newtimezone={timezone} />
        </div>
      </div>
    );
  } else {
    load();

    return "loading...";
  }
}
