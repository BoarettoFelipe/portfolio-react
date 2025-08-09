// src/App.jsx (Versão Corrigida sem StaticBackground)

import { useState, useEffect } from 'react';
// IMPORTANTE: Adicione o import do seu FlowingBackground aqui
import FlowingBackground from './components/FlowingBackground'; 
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Projetos from './components/pages/Projetos';
import Curriculo from './components/pages/Curriculo';
import Contato from './components/pages/Contato';
import './App.css';

function App() {
  const [nameStyle, setNameStyle] = useState({
    fontSize: '3.5rem',
    top: '50%',
    color: 'var(--cor-texto-principal)'
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 200;

      if (scrollY > triggerPoint) {
        setNameStyle({
          fontSize: '1.5rem',
          top: '28px', 
          color: 'var(--cor-destaque)'
        });
      } else {
        setNameStyle({
          fontSize: '3.5rem',
          top: '50%',
          color: 'var(--cor-texto-principal)'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Usando o seu componente de fundo que já existe */}
      <FlowingBackground />

      <h2 className="name-element" style={nameStyle}>
        Felipe Boaretto
      </h2>
      
      <Navbar />
      
      <section id="inicio">
        <Inicio />
      </section>
      
      {/* O resto das seções continua igual */}
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