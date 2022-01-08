import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div>
      <h2 className="todayTemp">{Math.round(props.fahrenheit)}</h2>
      <span className="unit">°F</span>
    </div>
  );
}
