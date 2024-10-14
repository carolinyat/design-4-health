// src/components/Header.js
import React from 'react';
import logo from '../assets/icons/HE_LOGOTIPO_REDUZIDO_ORIGINAL.png';

function Header() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="App-header">
    <div className="logo">
    <a href="https://healthbit.com.br" target="_blank" rel="noopener noreferrer">
        <img className="image-logo" src={logo} alt="Design 4 Health Logo" />
      </a>
    </div>
      <nav>
        <button onClick={() => scrollToSection('intro')}>Introdução</button>
        <button onClick={() => scrollToSection('color-theory')}>Teoria das Cores</button>
        <button onClick={() => scrollToSection('application')}>Aplicação Prática</button>
        <button onClick={() => scrollToSection('results')}>Resultados Esperados</button>
      </nav>
    </header>
  );
}

export default Header;

