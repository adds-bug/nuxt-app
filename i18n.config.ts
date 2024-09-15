import messages from '~/const/i18n';

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: useCookie('locale').value || useDefaultLocale().value, // get locale info from brower settings
  messages,
}));
