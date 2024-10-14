// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Meses do exemplo
    datasets: [
      {
        label: 'Positivos',
        data: [3, 2, 5, 4, 6, 5, 7],
        borderColor: '#57bea0', 
        backgroundColor: '#57bea0',
        fill: false,
      },
      {
        label: 'Neutros',
        data: [2, 3, 4, 3, 4, 3, 4],
        borderColor: '#3498db', 
        backgroundColor: '#3498db',
        fill: false,
      },
      {
        label: 'Negativos',
        data: [1, 2, 1, 3, 2, 1, 2],
        borderColor: '#e74c3c',
        backgroundColor: '#e74c3c',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: 'false',
      },
      tooltip: {
        enabled: true, 
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
