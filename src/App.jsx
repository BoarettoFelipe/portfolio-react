import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesConfig from './particles-config.js';

import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Projetos from './components/pages/Projetos';
import Curriculo from './components/pages/Curriculo';
import Contato from './components/pages/Contato';

import './App.css';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <Navbar />
      
      {/* Seção de início continua como está, pois já tem seu próprio estilo de 100vh */}
      <section id="inicio">
        <Inicio />
      </section>
      
      {/* Estrutura para a seção SOBRE */}
      <section id="sobre" className="full-page-section bg-white">
        <div className="section-content-container">
          <Sobre />
        </div>
      </section>
      
      {/* Estrutura para a seção PROJETOS */}
      <section id="projetos" className="full-page-section bg-light-gray">
        <div className="section-content-container">
          <Projetos />
        </div>
      </section>
      
      {/* Estrutura para a seção CURRÍCULO */}
      <section id="curriculo" className="full-page-section bg-white">
        <div className="section-content-container">
          <Curriculo />
        </div>
      </section>
      
      {/* Estrutura para a seção CONTATO */}
      <section id="contato" className="full-page-section bg-light-gray">
        <div className="section-content-container">
          <Contato />
        </div>
      </section>
    </div>
  );
}

export default App;