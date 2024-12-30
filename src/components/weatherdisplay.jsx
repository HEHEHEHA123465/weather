import React from 'react';

const WeatherDisplay = ({ city, weatherData }) => {
  return (
    <div className="weather-info">
      {city && weatherData ? (
        <>
          <h2>{city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Condition: {weatherData.condition}</p>
        </>
      ) : (
        <p>Please enter a city to see the weather information.</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
