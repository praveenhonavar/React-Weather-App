import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/weather.css";

function Weather() {
  const [city, setCity] = useState("India");

//   const [temperature, setTemperature] = useState("");
//   const [description, setDescription] = useState("");

  const [weatherData, setWeatherData] = useState({});

  const enterCity = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    axios.get(`https://goweather.herokuapp.com/weather/${city}`).then((res) => {
      console.log(res);
      setWeatherData(res.data);
    });
  }, [city]);

  return (
    <div>
      <div className="app-heading">
        <i class="fas fa-globe-americas fa-3x">
          <span className="app-header"> Weather App</span>
        </i>
      </div>

      <div className="main-container">
        <input
          onChange={enterCity}
          type="search"
          className="search-bar"
          placeholder="Enter city Name"

        ></input>

        <div className="weather-details">
          <h3 className="city-temperature">Its <span className="city-temp"> {weatherData.temperature} </span> in {city}</h3>
          <br></br>
          <h2 className="weather-description">{weatherData.description}</h2>
        </div>
      </div>
    </div>
  );
}

export default Weather;
