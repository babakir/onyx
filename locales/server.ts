import { createI18nServer } from 'next-international/server';
// import en from './en';

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer(
    {
        en: () => import('./en'),
        fa: () => import('./fa'),
        zh: () => import('./zh'),
        ru: () => import('./ru'),
        tr: () => import('./tr'),
        hi: () => import('./hi'),
    },
    {
        // Uncomment to use custom segment name
        // segmentName: 'locale',
        // Uncomment to set fallback locale
        // fallbackLocale: en,
    },
);