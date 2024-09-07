import React, { useState, useEffect } from "react";
import {
  FaCloudShowersHeavy,
  FaRegSnowflake,
  FaCloudRain,
  FaGlassWaterDroplet,
  FaCloud,
} from "react-icons/fa6";

const Weather = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.richardlechko.com/api/weather"
      : "http://localhost:5000/api/weather";

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`${apiUrl}?city=${city}`);
      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? "City not found"
            : "Failed to fetch weather data"
        );
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
      setWeatherData(null);
    }
  };

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return <FaCloud />;
      case "Clouds":
        return <FaCloud />;
      case "Drizzle":
        return <FaCloudRain />;
      case "Humidity":
        return <FaGlassWaterDroplet />;
      case "Mist":
        return <FaCloudRain />;
      case "Rain":
        return <FaCloudShowersHeavy />;
      case "Snow":
        return <FaRegSnowflake />;
      default:
        return ""; // Default icon
    }
  };

  return (
    <div>
      <header className="container justify-center m-auto mt-16 underline">
        <h1 className="text-3xl text-center text-black font-bold">
          Weather App Widget
        </h1>
      </header>
      <div className="weather-container container my-16 bg-[#333] rounded-3xl w-full m-auto h-[50vh] justify-center flex">
        <div className="search justify-center m-auto">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            className="text-2xl p-4 font-bold text-black outline-1 outline-black outline-double"
          />
          <button
            className="bg-green-500 font-bold text-white text-2xl p-4 outline-1 outline-black outline-double"
            onClick={handleSearch}
          >
            Search
          </button>
          {weatherData && weatherData.main && (
            <div className="weather flex justify-between w-full h-full outline-1 outline-white outline-double mt-8 text-xl rounded-2xl">
              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="type-weather text-white mb-2">
                  {weatherData.weather[0].main}
                </p>
                <i className="weather-icon text-5xl text-white">
                  {getWeatherIcon(weatherData.weather[0].main)}
                </i>
              </div>
              <div className="flex-1 flex flex-col justify-center text-white  text-center p-4 leading-10">
                <h2 className="city">{weatherData.name}</h2>
                <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
                <p className="humidity">
                  Humidity: {weatherData.main.humidity}%
                </p>
                <p className="wind">Wind Speed: {weatherData.wind.speed}km/h</p>
              </div>
            </div>
          )}

          {error && (
            <div className="error flex text-center justify-center mt-4 text-xl text-red-500 underline font-bold">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
