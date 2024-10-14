// src/components/CircularProgressBar.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function CircularProgressBar({ value, label }) {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#02589d', '#d3d3d3'], // Cores do gráfico
        borderWidth: 1, 
        borderColor: ['#02589d'],
      },
    ],
  };

  const options = {
    cutout: '80%', // Tamanho do centro vazio, estilo anel
    rotation: -90, // Início da animação
    circumference: 180, // Semicírculo
    plugins: {
      tooltip: { enabled: false }, // Desativa tooltip
    },
  };

  return (
    <div style={{ width: '170px', margin: '20px auto', textAlign: 'center' }}>
      <Doughnut data={data} options={options} />
      <div style={{ marginTop: '-70px', marginBottom: '30px', fontSize: '30px', fontWeight: 'bolder', color: '#02589d' }}>
        {value}%
      </div>
      <p>{label}</p>
    </div>
  );
}

export default CircularProgressBar;
