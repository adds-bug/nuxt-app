// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  // https://i18n.nuxtjs.org/docs/getting-started/usage
  i18n: {
    vueI18n: './i18n.config.ts',
    // locales: ['en', 'ko'], // used in URL path prefix
    // defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  // https://github.com/Maiquu/nuxt-quasar/blob/main/playground/nuxt.config.ts
  quasar: {
    plugins: ['Notify'],
    config: {
      // dark: true,
      brand: {
        primary: '#ffbd08',
        secondary: '#305018',
        dark: '#1d1d1d',
        positive: '#21ba45',
        negative: '#dd0e0eca',
        info: '#31ccec',
        warning: '#f2c037',
      },
      notify: {
        position: 'top-right',
      },
    },
  },
  imports: {},
  app: {},
  runtimeConfig: {
    public: {},
  },
});
