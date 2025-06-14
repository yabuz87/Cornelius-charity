import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'My Pie Chart',
        data: data.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="fs-2">Pie Chart</h2>
      <Pie ref={chartRef} data={chartData} />
    </div>
  );
};

export default PieChart;
