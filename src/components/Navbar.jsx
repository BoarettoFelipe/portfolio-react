import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import './Navbar.css';

function Navbar({ changeTheme, currentTheme }) {
  const { t } = useTranslation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 20) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <nav className={`navbar ${show ? 'visible' : 'hidden'}`}>
        <ul className="navbar-links">
          <li><a href="#inicio">{t('nav_inicio')}</a></li>
          <li><a href="#sobre">{t('nav_sobre')}</a></li>
          <li><a href="#projetos">{t('nav_projetos')}</a></li>
          <li><a href="#curriculo">{t('nav_curriculo')}</a></li>
          <li><a href="#contato">{t('nav_contato')}</a></li>
        </ul>

        <h2 className="navbar-name">
          <a href="#inicio" onClick={closeMobileMenu}>{t('hero_name')}</a>
        </h2>

        <div className="navbar-spacer">
          <ThemeSwitcher changeTheme={changeTheme} currentTheme={currentTheme} />
          <LanguageSwitcher />
        </div>

        <button className="hamburger-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMobileMenu}>×</button>
        <a href="#inicio" onClick={closeMobileMenu}>{t('nav_inicio')}</a>
        <a href="#sobre" onClick={closeMobileMenu}>{t('nav_sobre')}</a>
        <a href="#projetos" onClick={closeMobileMenu}>{t('nav_projetos')}</a>
        <a href="#curriculo" onClick={closeMobileMenu}>{t('nav_curriculo')}</a>
        <a href="#contato" onClick={closeMobileMenu}>{t('nav_contato')}</a>
        
        <div className="mobile-menu-options">
          <ThemeSwitcher changeTheme={changeTheme} currentTheme={currentTheme} />
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}

export default Navbar;