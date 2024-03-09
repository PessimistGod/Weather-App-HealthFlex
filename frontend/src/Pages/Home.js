import React from "react";
import { Link } from "react-router-dom";
import WeatherForecastIcon from "../Components/WeatherForecastIcon";
import RealTimeForecastIcon from "../Components/RealTimeForecastIcon";

const Home = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-20 mt-6">
        <Link
          to={"/realtime-weather"}
          className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
        >
          <div className="p-6">
            <RealTimeForecastIcon />
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Realtime Weather
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Using the Realtime Weather API you can access current weather information for your location in Realtime.
            </p>
          </div>
        </Link>

        <Link
          to={"/weather-forecast"}
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
        >
          <div className="p-6">
            <WeatherForecastIcon />

            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Weather Forecast
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Using the weather forecast API you can access up-to-date weather information for your location, including minute-by-minute forecasts for the next hour, hourly forecasts for the next 120 hours, and daily forecasts for the next 5 days.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
