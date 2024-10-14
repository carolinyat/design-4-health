// src/sections/Results.js
import React from 'react';
import CircularProgressBar from '../components/CircularProgressBar'; // Importe o componente do gráfico circular

function Results() {
  return (
    <section id="results" className="section">
      <div className="results-container">
        <h1 className="results-title">Resultados Esperados da Aplicação da Teoria das Cores</h1>
        <p className="results-subtitle">
          Veja os benefícios significativos que a aplicação correta da teoria das cores pode trazer para a experiência dos usuários:
        </p>

        <div className="results-grid" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <CircularProgressBar value={70} label="Redução de Erros em Formulários" />
          <CircularProgressBar value={50} label="Aumento na Satisfação dos Pacientes" />
          <CircularProgressBar value={40} label="Melhoria na Adesão ao Tratamento" />
          <CircularProgressBar value={30} label="Otimização do Tempo de Resposta" />
          <CircularProgressBar value={35} label="Melhoria na Experiência dos Profissionais de Saúde" />
        </div>
      </div>
      <p className="quer-saber-mais">Quer saber mais?</p>
      <div className="inscrever" style={{ cursor: 'pointer' }}>
        Se inscreva aqui!
      </div>
    </section>
  );
}

export default Results;
