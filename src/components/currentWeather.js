import React from 'react';
import './CurrentWeather.css'; // We'll create this next

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <div className="loading">Loading weather information...</div>;
  }

  // Convert from Kelvin to Celsius if needed (depends on API)
  const temp = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  
  return (
    <div className="current-weather">
      <div className="weather-header">
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <p className="weather-description">{weatherData.weather[0].description}</p>
      </div>
      
      <div className="weather-main">
        <div className="temperature-container">
          <img 
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
            alt={weatherData.weather[0].description} 
            className="weather-icon"
          />
          <div className="temperature">{temp}°C</div>
        </div>
        
        <div className="weather-details">
          <div className="detail">
            <span className="label">Feels like:</span>
            <span className="value">{feelsLike}°C</span>
          </div>
          <div className="detail">
            <span className="label">Humidity:</span>
            <span className="value">{weatherData.main.humidity}%</span>
          </div>
          <div className="detail">
            <span className="label">Wind:</span>
            <span className="value">{Math.round(weatherData.wind.speed * 3.6)} km/h</span>
          </div>
          <div className="detail">
            <span className="label">Pressure:</span>
            <span className="value">{weatherData.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;