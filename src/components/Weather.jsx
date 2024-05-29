import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setErrorMessage("Please enter a city name first");
      return;
    }

    const apiKey = "3ffcecd4c581b5c2d917e3509c7798ec"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setErrorMessage("");
    } catch (error) {
      setWeather(null);
      setErrorMessage("City not found");
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather</h1>
      <div className="weather-inputs">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {weather && !errorMessage && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
