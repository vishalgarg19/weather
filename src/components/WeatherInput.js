import React, { useRef } from "react";
import "./WeatherInput.css";

const WeatherInput = (props) => {
  const cityRef = useRef();
  const countryRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const cityName = cityRef.current.value;
    const countryName = countryRef.current.value;

    props.inputs(cityName, countryName);
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
