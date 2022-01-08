import React, { useState } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays.js";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  //let [timezone, setTimezone] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    //setTimezone(response.data.timezone_offset);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div id="weekAhead-Forecast" className="container">
        <div className="row weekAhead">
          <ForecastDays data={forecast[1]} />
          <ForecastDays data={forecast[2]} />
          <ForecastDays data={forecast[3]} />
          <ForecastDays data={forecast[4]} />
          <ForecastDays data={forecast[5]} />
          <ForecastDays data={forecast[6]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "58a6775f97527351bf6c6966e209be39";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
