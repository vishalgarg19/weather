import React, { useState, useEffect } from "react";
import "./Weather.css";
import WeatherInput from "./WeatherInput";
import WeatherOutput from "./WeatherOutput";
// import "../../src/api_key.dart";

const Weather = () => {
  const [weather, setWeather] = useState();
  const [output, setOutput] = useState(false);

  useEffect(() => {
    if (weather !== undefined) {
      setOutput(true);
    }
  }, [weather]);

  const inputData = (data) => {
    setWeather(data);
  };

  return (
    <div className="weather">
      <div className="header-text">
        <h1>Weather</h1>
      </div>
      <WeatherInput inputs={inputData} />
      {output && <WeatherOutput data={weather} />}
    </div>
  );
};

export default Weather;
