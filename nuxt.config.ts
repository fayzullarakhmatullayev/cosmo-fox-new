// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-svgo', '@nuxtjs/i18n'],

  css: ['swiper/css', 'swiper/css/pagination', 'swiper/css/navigation', '~/assets/scss/main.scss'],

  svgo: {
    componentPrefix: 'icon',
    defaultImport: 'component'
  },

  i18n: {
    locales: [
      { code: 'ru', file: 'ru.json' },
      { code: 'en', file: 'en.json' }
    ],
    defaultLocale: 'ru',
    langDir: '../locales',
    strategy: 'prefix',

    detectBrowserLanguage: {
      fallbackLocale: 'ru',
      useCookie: true,
      cookieKey: 'locale',
      alwaysRedirect: true
    }
  }
});
