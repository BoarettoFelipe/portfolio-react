// src/App.jsx (Versão Limpa)

// 1. Removemos todos os imports que não são mais necessários (useState, useEffect, particles, etc.)
import FlowingBackground from './components/FlowingBackground';

import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Projetos from './components/pages/Projetos';
import Curriculo from './components/pages/Curriculo';
import Contato from './components/pages/Contato';

import './App.css';

function App() {
  // 2. Removemos a lógica de state e effect do tsparticles daqui.

  return (
    <div>
      {/* 3. Deixamos APENAS nosso novo componente de fundo */}
      <FlowingBackground />
      
      {/* 4. O componente <Particles /> foi removido */}
      
      <Navbar />
      
      <section id="inicio">
        <Inicio />
      </section>
      
      {/* ATENÇÃO: Corrigi as classes das suas seções para o tema escuro que definimos */}
      <section id="sobre" className="full-page-section bg-content">
        <div className="section-content-container">
          <Sobre />
        </div>
      </section>
      
      <section id="projetos" className="full-page-section bg-darker">
        <div className="section-content-container">
          <Projetos />
        </div>
      </section>
      
      <section id="curriculo" className="full-page-section bg-content">
        <div className="section-content-container">
          <Curriculo />
        </div>
      </section>
      
      <section id="contato" className="full-page-section bg-darker">
        <div className="section-content-container">
          <Contato />
        </div>
      </section>
    </div>
  );
}

export default App;