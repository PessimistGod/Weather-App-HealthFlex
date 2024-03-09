import React, { useState } from "react";
import WeatherIcon from "../../Components/WeatherIcon";

const Daily = ({ dailyData, isNight }) => {
  const [MainCardData, setMainCardData] = useState(null);
  return (
    <section>
       <h2 className="text-3xl font-bold mb-4 flex justify-center">Daily Forecast</h2>
      <div
        className="flex flex-col items-center justify-center text-gray-700 p-2 md:p-10
        "
      >
        {MainCardData && (
          <div
            className={`w-full md:max-w-screen-sm bg-white p-5 md:p-10 rounded-xl ring-8 ring-white ring-opacity-40 border-2 bg-${
              isNight ? "black" : "white"
            } text-${isNight ? "white" : "black"}`}
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-2xl md:text-6xl font-bold">
                  {MainCardData.values.temperatureApparentMax}°C
                </span>
                {MainCardData?.location?.name && (
                  <span className="font-semibold mt-1 text-gray-500">
                    {MainCardData?.location?.name}
                  </span>
                )}
                {MainCardData?.time && (
                  <span className="font-semibold mt-1 text-gray-500">
                    {new Date(MainCardData?.time).toDateString()}
                  </span>
                )}
              </div>
              <div className="w-10 h-10">
                <WeatherIcon
                  cloudCover={MainCardData?.values?.cloudCoverMax}
                  precipitationProbability={MainCardData?.values?.precipitationProbabilityMax}
                  isNight={isNight}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm text-gray-500 whitespace-nowrap">Wind Speed</div>
            <div className="text-sm text-gray-500">
              {MainCardData?.values?.windSpeedMax}{"m/s"}
              
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm text-gray-500">Humidity</div>
            <div className="text-sm text-gray-500">
              {MainCardData?.values?.humidityMax}%
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm text-gray-500">Visibility</div>
            <div className="text-sm text-gray-500">
              {MainCardData?.values?.visibilityMax}{"km"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm text-gray-500 whitespace-nowrap">Sun Rise</div>
            <div className="text-sm text-gray-500">
            
              {new Date(MainCardData?.values?.sunriseTime).toLocaleTimeString()}
            </div>
          </div>
        </div>
          </div>
        )}

        <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-2 mt-10 rounded-xl ring-8 ring-white ring-opacity-40 cursor-pointer">
          {dailyData?.map((data, index) => (
            <div
              key={index}
              className="flex justify-between gap-5 items-center border-b"
              onClick={() => setMainCardData(data)}
            >
              <div className="font-semibold text-lg ">
                {new Date(data.time).toDateString()}
              </div>

              <div className="font-semibold text-lg flex justify-center gap-2 text-right ">
                {data.values.temperatureMax}°{" "}
                <span className="text-gray-400">
                  {" "}
                  {data.values.temperatureMin}°
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Daily;
