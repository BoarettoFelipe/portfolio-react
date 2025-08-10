import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = {
    pt: 'PT',
    en: 'EN',
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
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
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="dropdown-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {languages[i18n.language]}
        {/* Adicionamos a seta aqui, com uma classe que muda quando o dropdown está aberto */}
        <span className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></span>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {Object.keys(languages).map((lng) => {
            if (lng !== i18n.language) {
              return (
                <button 
                  key={lng} 
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