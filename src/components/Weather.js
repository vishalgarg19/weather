import React, { useState } from "react";
import "./Weather.css";
import WeatherInput from "./WeatherInput";

const Weather = () => {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const inputData = (cityName, countryName) => {
    setCity(cityName);
    setCountry(countryName);
    console.log(city, country);
  };

  return (
    <div className="weather">
      <div className="header-text">
        <h1>Weather</h1>
      </div>
      <WeatherInput inputs={inputData} />
    </div>
  );
};

export default Weather;
