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

  const apiUrl = "https://react-resume-api.vercel.app/api/weather";

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
        return "";
    }
  };

  return (
    <div className="px-4">
      <header className="text-center mt-12 mb-4 flex">
        <h1 className="m-auto text-2xl sm:text-3xl md:text-4xl font-bold text-black underline max-[375px]:text-xl max-[320px]:text-lg">
          Weather App Widget
        </h1>
      </header>
      <div className="weather-container container my-8 sm:my-12 md:my-16 bg-[#333] rounded-3xl w-full max-w-lg mx-auto h-auto sm:h-[50vh] flex flex-col items-center p-4 sm:p-6">
        <div className="search flex flex-col items-center gap-4 w-full">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            className="text-base sm:text-lg md:text-xl p-2 sm:p-3 md:p-4 font-bold text-black outline-1 outline-black rounded-lg w-full max-w-xs"
          />
          <button
            className="bg-green-500 font-bold text-base sm:text-lg md:text-xl p-2 sm:p-3 md:p-4 rounded-lg w-full max-w-xs"
            onClick={handleSearch}
          >
            Search
          </button>
          {weatherData && weatherData.main && (
            <div className="weather flex flex-col sm:flex-row items-center gap-4 w-full mt-4 sm:mt-6 p-4 sm:p-6 bg-[#444] rounded-2xl text-white">
              <div className="flex-1 flex flex-col items-center gap-2">
                <p className="text-base sm:text-lg md:text-xl mb-2">
                  {weatherData.weather[0].main}
                </p>
                <i className="text-xl sm:text-3xl md:text-4xl">
                  {getWeatherIcon(weatherData.weather[0].main)}
                </i>
              </div>
              <div className="flex-1 flex flex-col items-center text-center">
                <h2 className="text-base sm:text-lg md:text-xl">
                  {weatherData.name}
                </h2>
                <p className="text-base sm:text-lg md:text-xl">
                  {Math.round(weatherData.main.temp)}°C
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  Humidity: {weatherData.main.humidity}%
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  Wind Speed: {weatherData.wind.speed} km/h
                </p>
              </div>
            </div>
          )}
          {error && (
            <div className="error text-center mt-4 text-lg sm:text-xl text-red-500 underline font-bold">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
