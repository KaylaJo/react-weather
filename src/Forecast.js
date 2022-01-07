import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "58a6775f97527351bf6c6966e209be39";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div id="weekAhead-Forecast" className="container">
      <div className="row weekAhead">
        <div className="col-4 weekForecast">
          Mon
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Tue
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Wed
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Thu
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Fri
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Sat
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
