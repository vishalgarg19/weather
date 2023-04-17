import React, { useRef, useState } from "react";
import "./WeatherInput.css";

const WeatherInput = (props) => {
  const [city, setCity] = useState();
  // const [country, setCountry] = useState();
  const cityRef = useRef();
  const countryRef = useRef();
  const APIKEY = "62a467a865fe6162544e1e40211be5ee";

  async function weartherData(e) {
    if (city === "" || city === undefined) {
      alert("add values");
    } else {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`
      );
      const data = await response.json();
      console.log(data);

      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKEY}`
      );

      const data2 = await response2.json();
      console.log(data2);
      props.inputs(data2);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const cityName = cityRef.current.value;
    const countryName = countryRef.current.value;
    setCity(cityName);
    console.log(cityName, countryName);

    weartherData();
  };

  return (
    <div className="client-input">
      <form onSubmit={submitHandler}>
        <div className="input-1">
          <input
            type="text"
            ref={cityRef}
            className="city inputs"
            name="city"
            placeholder="city"
            required
          />
        </div>
        <div className="input-2">
          <input
            type="text"
            ref={countryRef}
            className="country inputs"
            name="country"
            placeholder="country"
            required
          />
        </div>
        <div className="input-3">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeatherInput;
