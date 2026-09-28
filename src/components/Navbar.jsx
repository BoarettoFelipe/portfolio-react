import { profile } from '../data/profile';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import './Navbar.css';

const sections = ['inicio', 'sobre', 'projetos', 'curriculo', 'contato'];

function Navbar({ changeTheme, currentTheme, nameInHeader, headerRef }) {
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 2);
  const scrollState = useRef({ y: 0, show: true, scrolled: false });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menu = useRef(null);
  const menuTrigger = useRef(null);

  useEffect(() => {
    const state = scrollState.current;
    state.y = window.scrollY;
    state.scrolled = window.scrollY > 2;
    let frame = 0;
    const updateNavbar = () => {
      frame = 0;
      const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
      const hasScrolled = y > 2;
      if (hasScrolled !== state.scrolled) {
        state.scrolled = hasScrolled;
        setScrolled(hasScrolled);
      }
      const delta = y - state.y;
      if (y > 8 && Math.abs(delta) < 8) return;
      const visible = y <= 8 || delta < 0;
      state.y = y;
      if (visible !== state.show) {
        state.show = visible;
        setShow(visible);
      }
    };
    const controlNavbar = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavbar);
    };
    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const dialog = menu.current;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    const desktop = window.matchMedia('(min-width: 1200px)');
    const onResize = () => { if (desktop.matches) setIsMobileMenuOpen(false); };
    desktop.addEventListener('change', onResize);
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      desktop.removeEventListener('change', onResize);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    menu.current.close();
    menuTrigger.current?.focus();
  };

  return (
    <>
      <nav ref={headerRef} className={`navbar ${show || isMobileMenuOpen ? 'visible' : 'hidden'}${scrolled ? ' scrolled' : ''}`} aria-label={t('menu_title')}>
        <ul className="navbar-links">
          {sections.map((id) => <li key={id}><a href={`#${id}`}>{t(`nav_${id}`)}</a></li>)}
        </ul>
        <p className={`navbar-name${nameInHeader ? ' active' : ''}`} aria-hidden={!nameInHeader}><a href="#inicio" tabIndex={nameInHeader ? undefined : -1}>{profile.name}</a></p>
        <div className="navbar-spacer">
          <ThemeSwitcher changeTheme={changeTheme} currentTheme={currentTheme} />
          <LanguageSwitcher />
        </div>
        <button ref={menuTrigger} type="button" className="icon-button hamburger-button" aria-label={t('menu_open')} aria-haspopup="dialog" aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMobileMenuOpen(true)}>☰</button>
      </nav>
      <dialog ref={menu} id="mobile-menu" className="mobile-menu" aria-labelledby="mobile-menu-title" onCancel={(event) => { event.preventDefault(); closeMenu(); }}>
        <div className="mobile-menu-header">
          <h2 id="mobile-menu-title">{t('menu_title')}</h2>
          <button type="button" className="icon-button close-button" onClick={closeMenu} aria-label={t('menu_close')}>×</button>
        </div>
        <nav aria-label={t('menu_title')}>
          {sections.map((id) => <a key={id} href={`#${id}`} onClick={() => {
            closeMenu();
            document.getElementById(id)?.focus({ preventScroll: true });
          }}>{t(`nav_${id}`)}</a>)}
        </nav>
        <div className="mobile-menu-options">
          <ThemeSwitcher changeTheme={changeTheme} currentTheme={currentTheme} />
          <LanguageSwitcher />
        </div>
      </dialog>
    </>
  );
}
export default Navbar;
