import { useState, useEffect } from 'react';
import FlowingBackground from './components/FlowingBackground';
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Projetos from './components/pages/Projetos';
import Curriculo from './components/pages/Curriculo';
import Contato from './components/pages/Contato';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={isScrolled ? 'scrolled-past-hero' : ''}>
      {theme === 'dark' && <FlowingBackground />}
      
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      
      <section id="inicio">
        <Inicio />
      </section>
      
      <section id="sobre" className="full-page-section">
        <div className="section-content-container">
          <Sobre />
        </div>
      </section>
      <section id="projetos" className="full-page-section">
        <div className="section-content-container">
          <Projetos />
        </div>
      </section>
      <section id="curriculo" className="full-page-section">
        <div className="section-content-container">
          <Curriculo />
        </div>
      </section>
      <section id="contato" className="full-page-section">
        <div className="section-content-container">
          <Contato />
        </div>
      </section>
    </div>
  );
}

export default App;