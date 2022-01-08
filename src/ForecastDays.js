import React from "react";
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function icon() {
    let icon = `./icons/${props.data.weather[0].icon}.png`;
    return `${icon}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    // let localTime = date.getTime();
    //let localOffset = date.getTimezoneOffset() * 60000;
    //let utc = localTime + localOffset;
    //let local = utc + 1000 * props.timezone;
    //let newTime = new Date(local);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col-4 weekForecast">
      {day()}
      <br />
      <span className="weekHigh">{maxTemp()}°</span>
      <span className="weekLow">{minTemp()}°</span>
      <br />
      <div className="weekIcon">
        <img src={icon()} alt="weather icon" />
      </div>
    </div>
  );
}
