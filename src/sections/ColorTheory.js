// src/sections/ColorTheory.js
import React from 'react';
import teoriaCores from '../assets/images/teoria-cores.png';

function ColorTheory() {
  return (
    <section id="color-theory" className="section">
      <div className="color-theory-container">
        <h1 className="color-theory-title">A Teoria das Cores e Seu Impacto na Saúde</h1>
        <p className="color-theory-subtitle">
          A aplicação correta das cores em interfaces de saúde pode melhorar a compreensão, reduzir a ansiedade e facilitar a navegação. Aqui estão algumas das principais cores e seus impactos.
        </p>

        <div className='color-text'>
          <p><strong>🟦 Azul: </strong>Transmite calma e confiança. Ideal para plataformas de telemedicina e interfaces de saúde.</p>
          <p><strong>🟩 Verde: </strong>Transmite equilíbrio e saúde. Usado para indicar progresso e sucesso em aplicativos.</p>
          <p><strong>🟥 Vermelho: </strong>Transmite atenção e urgência. Utilizado para alertas e informações críticas.</p>
          <p><strong>🟨 Amarelo: </strong>Transmite destaque e motivação. Útil para chamar atenção para informações importantes.</p>
        </div>

        <div className='color-theory-image'>
          <img className="colorImage" src={teoriaCores} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ColorTheory;