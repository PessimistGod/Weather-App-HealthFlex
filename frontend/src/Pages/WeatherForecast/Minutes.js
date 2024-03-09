import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import * as AdapterDateFns from 'chartjs-adapter-date-fns';

const Minutes = ({ minutelyData }) => {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    if (!minutelyData || minutelyData.length === 0 || !chartRef.current) {
      return;
    }

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = minutelyData.map(item => new Date(item.time));
    const cloudCoverData = minutelyData.map(item => item.values.cloudCover);
    const temperatureData = minutelyData.map(item => item.values.temperature);
    const humidityData = minutelyData.map(item => item.values.humidity);
    const windSpeedData = minutelyData.map(item => item.values.windSpeed);

    const ctx = chartRef.current.getContext('2d');
    if (ctx) {
      try {
        // Register date adapter
        Chart.register(AdapterDateFns);

        // Create new chart instance
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Cloud Cover',
                data: cloudCoverData,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                lineTension: 0.1,
              },
              {
                label: 'Temperature (°C)',
                data: temperatureData,
                fill: false,
                borderColor: 'rgba(255,99,132,1)',
                lineTension: 0.1,
              },
              {
                label: 'Humidity (%)',
                data: humidityData,
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                lineTension: 0.1,
              },
              {
                label: 'Wind Speed (m/s)',
                data: windSpeedData,
                fill: false,
                borderColor: 'rgba(255, 206, 86, 1)',
                lineTension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'minute',
                  displayFormats: {
                    minute: 'HH:mm',
                  },
                },
                title: {
                  display: true,
                  text: 'Time',
                },
              },
              y: {
                type: 'linear',
                display: true,
                title: {
                  display: true,
                  text: 'Value',
                },
              },
            },
          },
        });
      } catch (error) {
        console.error('Error creating chart:', error);
      }
    } else {
      console.error('Failed to acquire context from canvas element');
    }

    // Cleanup function to destroy chart instance
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [minutelyData]);

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-4 flex justify-center">Minute-by-Minute Forecast</h2>
      {minutelyData && minutelyData.length > 0 ? (
        <canvas ref={chartRef} />
      ) : (
        <p>No minute-by-minute data available</p>
      )}
    </div>
  );
};

export default Minutes;
