import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fa from './locales/fa.json';
import en from './locales/en.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fa,
            en
        },
        fallbackLng: 'en',
        debug: process.env.NODE_ENV !== 'production',
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
        },
    });

export default i18n;