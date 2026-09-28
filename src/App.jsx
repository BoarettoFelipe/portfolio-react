import { useState, useEffect, useRef } from 'react';
import FlowingBackground from './components/FlowingBackground';
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Perfil from './components/pages/Perfil';
import Experiencia from './components/pages/Experiencia';
import Projetos from './components/pages/Projetos';
import Contato from './components/pages/Contato';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [nameInHeader, setNameInHeader] = useState(false);
  const heroName = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    let observer;
    const observeName = () => {
      observer?.disconnect();
      const boundary = header.current.offsetHeight;
      observer = new IntersectionObserver(([entry]) => {
        setNameInHeader(entry.boundingClientRect.top < boundary);
      }, { rootMargin: `-${boundary}px 0px 0px 0px`, threshold: [0, 1] });
      observer.observe(heroName.current);
    };
    const resize = new ResizeObserver(observeName);
    resize.observe(header.current);
    observeName();
    return () => { observer.disconnect(); resize.disconnect(); };
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || 'pt';
  }, [i18n.resolvedLanguage]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{t('skip_content')}</a>

      <Navbar changeTheme={changeTheme} currentTheme={theme} nameInHeader={nameInHeader} headerRef={header} />

      <main id="main-content" tabIndex={-1}>
        <section id="inicio" tabIndex={-1}>
          {theme === 'dark' && <FlowingBackground />}
          <Inicio nameRef={heroName} nameInHeader={nameInHeader} />
        </section>

        <section id="perfil" tabIndex={-1} className="full-page-section">
          <div className="section-content-container">
            <Perfil />
          </div>
        </section>
        <section id="experiencia" tabIndex={-1} className="full-page-section" aria-labelledby="experience-title">
          <div className="section-content-container">
            <Experiencia />
          </div>
        </section>
        <section id="projetos" tabIndex={-1} className="full-page-section">
          <div className="section-content-container">
            <Projetos />
          </div>
        </section>
        <section id="contato" tabIndex={-1} className="full-page-section">
          <div className="section-content-container">
            <Contato />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
