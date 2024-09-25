// src/sections/Results.js
import React from 'react';

function Results() {
  return (
    <section id="results" className="section">
      <div className="results-container">
        <h1 className="results-title">Resultados Esperados da Aplicação da Teoria das Cores</h1>
        <p className="results-subtitle">
          Veja os benefícios significativos que a aplicação correta da teoria das cores pode trazer para a experiência dos usuários em plataformas de saúde.
        </p>

        <div className="results-grid">
          <div className="result-card">
            <h2>+70%</h2>
            <p>Redução de Erros em Formulários</p>
          </div>

          <div className="result-card">
            <h2>+50%</h2>
            <p>Aumento na Satisfação dos Pacientes</p>
          </div>

          <div className="result-card">
            <h2>+40%</h2>
            <p>Melhoria na Adesão ao Tratamento</p>
          </div>

          <div className="result-card">
            <h2>+30%</h2>
            <p>Otimização do Tempo de Resposta</p>
          </div>

          <div className="result-card">
            <h2>+35%</h2>
            <p>Melhoria na Experiência dos Profissionais de Saúde</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
