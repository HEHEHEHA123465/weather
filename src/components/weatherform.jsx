import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);  // Passing city to parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city"
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
