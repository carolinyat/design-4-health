// src/sections/Intro.js
import React from 'react';
// import introImage2 from '../assets/images/intro-image.png';
import backgroundImage from '../assets/images/abstract-background.jpg';


function Intro() {
  return (
    <section
      id="intro"
      className="section"
      style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Camada de sobreposição */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Branco com opacidade
          zIndex: 1,
        }}
      ></div>
      <div className="intro-container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="intro-title">Design Estratégico </h1>
        <h2 className="intro-title2">Transforme a Experiência em Saúde </h2>

        <p className="intro-subtitle">
          Aplicando a teoria das cores e o design intuitivo para aumentar a eficiência e a satisfação do usuário.
        </p>

        <div className="intro-stats">
          <div className="stat-block">
            <h2>+70%</h2>
            <p>Redução de Erros em Formulários</p>
          </div>
          <div className="stat-block">
            <h2>+50%</h2>
            <p>Aumento na Satisfação dos Usuários</p>
          </div>
          <div className="stat-block">
            <h2>+40%</h2>
            <p>Melhoria na Eficiência do Atendimento</p>
          </div>
        </div>
        <div className="saiba-mais-section">
          <p className='saiba-mais'>Saiba mais abaixo!</p>
        </div>
        {/* <div className='image-intro2'>
          <img className="introImage2" src={introImage2} alt="" />
        </div> */}
      </div>
    </section>
  );
}

export default Intro;
