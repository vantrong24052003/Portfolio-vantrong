import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import yaml from 'js-yaml';

const DEFAULT_LANGUAGE = 'en';
const FALLBACK_LANGUAGE = 'en';
const LANG_QUERY_PARAM = 'lang';

const getInitialLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get(LANG_QUERY_PARAM);
  return langFromUrl === 'vi' ? 'vi' : DEFAULT_LANGUAGE;
};

const loadYamlTranslations = async (lang: string) => {
  const modules = {
    nav: await import(`./locales/${lang}/nav.yml?raw`),
    overview: await import(`./locales/${lang}/overview.yml?raw`),
    journey: await import(`./locales/${lang}/journey.yml?raw`),
    showcase: await import(`./locales/${lang}/showcase.yml?raw`),
    connection: await import(`./locales/${lang}/connection.yml?raw`),
    common: await import(`./locales/${lang}/common.yml?raw`),
  };

  const translations: Record<string, unknown> = {};
  for (const [key, module] of Object.entries(modules)) {
    translations[key] = yaml.load(module.default);
  }
  return translations;
};

const enTranslations = await loadYamlTranslations('en');
const viTranslations = await loadYamlTranslations('vi');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      vi: { translation: viTranslations },
    },
    lng: getInitialLanguage(),
    fallbackLng: FALLBACK_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  const url = new URL(window.location.href);
  if (lng === DEFAULT_LANGUAGE) {
    url.searchParams.delete(LANG_QUERY_PARAM);
  } else {
    url.searchParams.set(LANG_QUERY_PARAM, lng);
  }
  window.history.replaceState({}, '', url.toString());
});

export default i18n;
