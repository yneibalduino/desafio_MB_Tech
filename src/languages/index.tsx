import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locale/pt-BR.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',

  lng: 'pt-BR',
  // fallbackLng: ['pt'],
  resources: {
    ['pt-BR']: pt,
  },
});

export default i18n;
