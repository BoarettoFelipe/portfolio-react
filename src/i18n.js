import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationPT from './locales/pt/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  pt: {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  },
};

const savedLanguage = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: ['pt', 'en'].includes(savedLanguage) ? savedLanguage : 'pt',
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
