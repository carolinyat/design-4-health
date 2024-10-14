// src/sections/Intro.js
import React, { useEffect, useState } from 'react';
import lupa from '../assets/icons/lupa.png';
import backgroundImage from '../assets/images/abstract-background.jpg';
import designEstrategico from "../assets/images/consultoria.png";

function useCountUp(endValue, duration) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / endValue);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [endValue, duration]);

  return count;
}

function Intro() {
  const count1 = useCountUp(70, 2000); // 70% em 2 segundos
  const count2 = useCountUp(50, 2000); // 50% em 2 segundos
  const count3 = useCountUp(40, 2000); // 40% em 2 segundos

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
      {/* <div class="blob"></div> */}
      <div className="intro-container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="intro-title">Design Estratégico </h1>
        <h2 className="intro-title2">Transforme a Experiência em Saúde </h2>

        <p className="intro-subtitle">
          Aplicando a teoria das cores e o design intuitivo para aumentar a eficiência e a satisfação do usuário.
        </p>

        <div className="intro-stats">
          <div className="stat-block">
            <h2>+{count1}%</h2>
            <p>Redução de Erros em Formulários</p>
          </div>
          <div className="stat-block">
            <h2>+{count2}%</h2>
            <p>Aumento na Satisfação dos Usuários</p>
          </div>
          <div className="stat-block">
            <h2>+{count3}%</h2>
            <p>Melhoria na Eficiência do Atendimento</p>
          </div>
        </div>
        <div className="saiba-mais-section">
          <p className="saiba-mais">Saiba mais abaixo!</p>
          <img className="lupa" src={lupa} alt="" />
        </div>
        {/* <div className="imageDesign"> */}
          <img className="image-design" src={designEstrategico} alt="" />
        {/* </div> */}
      </div>
    </section>
  );
}

export default Intro;
