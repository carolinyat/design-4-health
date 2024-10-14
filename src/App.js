// src/App.js
import React from 'react';
import Header from './components/Header'; // Mantenha o Header no topo
import Intro from './sections/Intro'; // Importe cada seção diretamente
import ColorTheory from './sections/ColorTheory';
import Application from './sections/Application';
import Results from './sections/Results';
import Footer from './components/Footer';
import './App.css'; // Certifique-se de que o CSS está importado

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <ColorTheory />
      <Application />
      {/* <Results /> */}
      <Footer />
    </div>
  );
}

export default App;