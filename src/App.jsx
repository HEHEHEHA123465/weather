import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a valid city name.");
      return;
    }

    const apiKey = '58745bd7b74d4979bec115114243012';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (err) {
      setWeatherData(null);
      if (err.response) {
        setError(err.response.data.error.message || "Error fetching weather data.");
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="City name"
      />
      <button onClick={handleFetchWeather} disabled={loading || !city.trim()}>
        {loading ? "Loading..." : "Get Weather"}
      </button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Wind: {weatherData.current.wind_kph} kph</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
