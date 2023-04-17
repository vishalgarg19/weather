import React from "react";
import "./WeatherOutput.css";

const WeatherOutput = (props) => {
  const { data } = props;
  if (data === undefined) {
    alert("add value");
  }
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="displayweather">
      <div className="main">
        <span className="weathertitle">
          {data.name},{data.sys.country}.weather
        </span>
        <span className="weathersubtitle">
          As of {new Date().toLocaleTimeString()}
        </span>
        <div className="temp">
          <h1>
            {Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
          </h1>
          <span className="weatherlogo">{data.weather[0].main}</span>
          <img src={iconUrl} alt="weatherImg" className="weather-icon" />
        </div>
      </div>
    </div>
  );
};

export default WeatherOutput;
