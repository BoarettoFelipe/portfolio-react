import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function Flag({ language }) {
  if (language === 'pt') {
    return (
      <svg aria-hidden="true" className="language-flag" viewBox="0 0 24 16">
        <rect width="24" height="16" rx="2" fill="#229E45" />
        <path d="m12 2 9 6-9 6-9-6Z" fill="#F8D447" />
        <circle cx="12" cy="8" r="3.1" fill="#274A91" />
        <path d="M9 7.5c2-.5 4.2 0 6 1" fill="none" stroke="#fff" strokeWidth=".7" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="language-flag" viewBox="0 0 24 16">
      <rect width="24" height="16" rx="2" fill="#fff" />
      <path d="M0 1h24M0 3.5h24M0 6h24M0 8.5h24M0 11h24M0 13.5h24" stroke="#C83F4B" strokeWidth="1.25" />
      <path d="M0 0h10v8H0Z" fill="#28447B" />
      <path d="M2 2h1m2 0h1m2 0h1M2 4h1m2 0h1m2 0h1M2 6h1m2 0h1m2 0h1" stroke="#fff" strokeWidth=".8" />
    </svg>
  );
}

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';

  const changeLanguage = (language) => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher" role="group" aria-label={t('language_label')}>
      {['pt', 'en'].map((language) => (
        <button
          key={language}
          type="button"
          className="language-option"
          aria-label={t(language === 'pt' ? 'language_portuguese' : 'language_english')}
          aria-pressed={activeLanguage === language}
          onClick={() => changeLanguage(language)}
        >
          <Flag language={language} />
          <span>{language.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
