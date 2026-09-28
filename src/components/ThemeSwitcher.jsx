import { useState, useEffect, useRef, useId } from 'react';
import { useTranslation } from 'react-i18next';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ changeTheme, currentTheme }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuId = useId();

  const themes = ['dark', 'gray'];

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="theme-switcher" ref={dropdownRef} onKeyDown={(event) => {
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        event.stopPropagation();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }}>
      <button type="button" ref={triggerRef} aria-expanded={isOpen} aria-controls={menuId} aria-label={t('themes_label')} className="theme-button" onClick={() => setIsOpen(!isOpen)}>
        {t('themes_label')}
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}></span>
      </button>

      {isOpen && (
        <div id={menuId} className="theme-dropdown-menu">
          {themes.map((themeKey) => (
            <button
              type="button" aria-pressed={currentTheme === themeKey} key={themeKey}
              className={`theme-dropdown-item ${currentTheme === themeKey ? 'active' : ''}`}
              onClick={() => handleThemeChange(themeKey)}
            >
              {themeKey === 'dark' ? t('theme_deep_space') : t('theme_mono_gray')}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;