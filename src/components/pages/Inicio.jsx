import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Inicio.css';

function Inicio() {
  const { t } = useTranslation();
  const [hintLang, setHintLang] = useState('pt');

  const hints = {
    pt: "Dica: Use os botões no canto superior direito para alterar o tema e o idioma!",
    en: "Hint: Use the buttons in the top right corner to change the theme and language!"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHintLang(prevLang => (prevLang === 'pt' ? 'en' : 'pt'));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-main-content">
        <h2 className="hero-name">{t('hero_name')}</h2>
        <p>{t('hero_subtitle')}</p>
        <div className="hero-links">
          <div className="social-link-wrapper">
            <a href="https://github.com/BoarettoFelipe" target="_blank" rel="noopener noreferrer" className="social-link" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <div className="tooltip">BoarettoFelipe</div>
          </div>
          <div className="social-link-wrapper">
            <a href="https://wa.me/5541999027311" target="_blank" rel="noopener noreferrer" className="social-link" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <div className="tooltip">+55 41 99902-7311</div>
          </div>
          <div className="social-link-wrapper">
            <a href="mailto:feliperibasboaretto@gmail.com" className="social-link" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <div className="tooltip">feliperibasboaretto@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="hero-hint">
        <p key={hintLang} className="hero-hint-text">
          {hints[hintLang]}
        </p>
      </div>
    </div>
  );
}

export default Inicio;