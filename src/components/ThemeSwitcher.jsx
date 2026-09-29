import { useTranslation } from 'react-i18next';
import './ThemeSwitcher.css';

function ThemeSwitcher({ changeTheme, currentTheme }) {
  const { t } = useTranslation();
  const isDark = currentTheme === 'dark';
  const label = t(isDark ? 'theme_enable_light' : 'theme_enable_dark');

  return (
    <button
      type="button"
      className="theme-button"
      aria-label={label}
      title={label}
      onClick={() => changeTheme(isDark ? 'gray' : 'dark')}
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeSwitcher;
