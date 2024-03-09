import React, { useState } from "react";

import weatherCode from "../../WeatherFile/WeatherCode.json";
import WeatherIcon from "../../Components/WeatherIcon";

const WeatherDisplay = ({ weatherData, isNight }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temperature) => {
    return isCelsius
      ? temperature.toFixed(2)
      : ((temperature * 9) / 5 + 32).toFixed(2);
  };

  const convertSpeed = (speed) => {
    return isCelsius ? speed.toFixed(2) : (speed * 2.237).toFixed(2); // m/s to mph conversion
  };

  const convertVisibility = (visibility) => {
    return isCelsius
      ? visibility.toFixed(2)
      : (visibility * 0.621371).toFixed(2); // km to miles conversion
  };

  return (
    <div
      className={`bg-${isNight ? "black" : "white"} text-${
        isNight ? "white" : "black"
      }  min-h-[85vh] flex items-center justify-center `}
    >
      <div className="flex flex-col  rounded p-4 w-full max-w-xs">
        <div className="font-bold text-xl text-gray-500">
          {weatherData?.location?.name}
        </div>
        <div className="text-sm text-gray-500">
          {weatherData?.data?.time &&
            new Date(weatherData.data.time).toLocaleString()}
        </div>

        <div
          className={`mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24`}
        >
<WeatherIcon
  cloudCover={weatherData?.values?.cloudCover || weatherData?.data?.values?.cloudCover}
  precipitationProbability={weatherData?.values?.precipitationProbability || weatherData?.data?.values?.precipitationProbability}
  isNight={isNight}
/>

        </div>
        <div className="flex flex-row gap-6 items-center justify-center mt-6">
          <div className="font-medium text-5xl text-gray-500">
            {convertTemperature(weatherData?.data?.values?.temperature)}°
            {isCelsius ? "C" : "F"}
          </div>
          <div className="border border-gray-400 h-16"></div>
          <button
            onClick={toggleUnit}
            className="ml-2 font-medium text-5xl text-gray-600 hover:scale-110"
          >
            {isCelsius ? "F" : "C"}
          </button>
        </div>
        <div className="font-semibold text-xl text-gray-400 flex justify-center py-2">
          {weatherData?.data?.values?.weatherCode &&
            weatherCode[weatherData.data.values.weatherCode]}
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm text-gray-500">Wind Speed</div>
            <div className="text-sm text-gray-500">
              {convertSpeed(weatherData?.data?.values?.windSpeed)}{" "}
              {isCelsius ? "m/s" : "mph"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm text-gray-500">Humidity</div>
            <div className="text-sm text-gray-500">
              {weatherData?.data?.values?.humidity}%
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm text-gray-500">Visibility</div>
            <div className="text-sm text-gray-500">
              {convertVisibility(weatherData?.data?.values?.visibility)}{" "}
              {isCelsius ? "km" : "miles"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
