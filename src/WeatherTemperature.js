import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`metric`);

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <h2 className="todayTemp">{Math.round(fahrenheit)}</h2>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="todayTemp">{Math.round(props.celsius)}</h2>
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
