import { useState, useEffect, useRef, useId } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuId = useId();

  const languages = {
    pt: 'PT',
    en: 'EN',
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef} onKeyDown={(event) => {
      if (event.key === 'Escape' && isDropdownOpen) {
        event.preventDefault();
        event.stopPropagation();
        setIsDropdownOpen(false);
        triggerRef.current?.focus();
      }
    }}>
      <button
        type="button" ref={triggerRef} aria-expanded={isDropdownOpen} aria-controls={menuId} aria-label={t('language_label')} className="dropdown-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {languages[i18n.language]}
        <span className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></span>
      </button>

      {isDropdownOpen && (
        <div id={menuId} className="dropdown-menu">
          {Object.keys(languages).map((lng) => {
            if (lng !== i18n.language) {
              return (
                <button
                  type="button" key={lng}
                  className="dropdown-item"
                  onClick={() => changeLanguage(lng)}
                >
                  {languages[lng]}
                </button>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;