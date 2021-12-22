import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div id="weekAhead-Forecast" className="container">
      <div className="row weekAhead">
        <div className="col-4 weekForecast">
          Monday
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Tuesday
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Wednesday
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Thursday
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Friday
          <br />
          <span className="weekHigh">75°</span>
          <span className="weekLow">40°</span>
          <br />
          <div className="weekIcon">
            <img src="./icons/50n.png" alt="weather icon" />
          </div>
        </div>
        <div className="col-4 weekForecast">
          Sunny
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
