import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
