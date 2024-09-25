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

        <div className="color-blocks">
          <div className="color-block blue">
            <div className="color-circle"></div>
            <h2>Azul</h2>
            <p>Transmite calma e confiança. Ideal para plataformas de telemedicina e interfaces de saúde.</p>
          </div>

          <div className="color-block green">
            <div className="color-circle"></div>
            <h2>Verde</h2>
            <p>Transmite equilíbrio e saúde. Usado para indicar progresso e sucesso em aplicativos.</p>
          </div>
        </div>
        <div className="color-blocks2">
          <div className="color-block red">
            <div className="color-circle"></div>
            <h2>Vermelho</h2>
            <p>Transmite atenção e urgência. Utilizado para alertas e informações críticas.</p>
          </div>

          <div className="color-block yellow">
            <div className="color-circle"></div>
            <h2>Amarelo</h2>
            <p>Transmite destaque e motivação. Útil para chamar atenção para informações importantes.</p>
          </div>
        </div>
        <div className='color-theory-image'>
          <img className="colorImage" src={teoriaCores} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ColorTheory;