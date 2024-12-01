import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        resume: 'Resume',
        biography: 'Biography',
        resume_header: 'Resume page',
        biography_header: 'Biography page',
        abstract: 'Abstract',
        library: 'Library',
        links: 'Links',
        searchReport: 'Search Report',
        customSection: 'Custom Section',
        text: {
          d: 'ddddd',
        },
      },
    },
    ru: {
      translation: {
        resume: 'Резюме',
        biography: 'Биография',
        resume_header: 'Главная страница',
        biography_header: 'Биография',
        abstract: 'Реферат',
        library: 'Библиотека',
        links: 'Ссылки',
        searchReport: 'Отчет о поиске',
        customSection: 'Индивидуальный раздел',
        text: {
          d: 'ddddd',
        },
      },
    },
  },
  lng: 'ru', // язык по умолчанию
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
