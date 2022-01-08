import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="weatherContainer">
      <h1 className="cityName">{props.data.city}</h1>
      <span className="time">
        <FormattedDate time={props.data.time} />
      </span>
      <div className="row temperatureContainer">
        <div className="col-md-6 Temperature">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className=" col-md-6 infoContainer">
          <h3 className="weatherType text-capitalize">
            {props.data.description}
          </h3>
          <span>
            <img
              src={props.data.icon}
              className="mainIcon"
              alt={props.data.description}
            />
          </span>
          <h4 className="humidity">Humidity:{props.data.humidity} %</h4>
          <p className="windSpeed">WindSpeed: {props.data.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}
