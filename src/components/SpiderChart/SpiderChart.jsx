
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// https://www.chartjs.org/docs/latest/charts/radar.html
const SpiderChart = ({ datasets, labels }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      if (!chartInstance.current) {
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: {
            scales: {
              r: {
                angleLines: {
                  display: true,
                },
                ticks: {
                  stepSize: 10
                },
                suggestedMin: 0,
                suggestedMax: 5, // Adjust max value as needed
              },
            },
          },
        });
      }
    }
  }, [datasets, labels]);

  return <canvas ref={chartContainer} />;
};


export default SpiderChart;