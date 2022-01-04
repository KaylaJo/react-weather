import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div>
      <h2 className="todayTemp">{Math.round(props.celsius)}</h2>
      <span className="degreeUnits">°C</span>
    </div>
  );
}
