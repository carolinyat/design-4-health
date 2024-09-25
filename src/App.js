// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './sections/Intro';
import ColorTheory from './sections/ColorTheory';
import Application from './sections/Application';
import Results from './sections/Results';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <Intro />
      <ColorTheory />
      <Application />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
