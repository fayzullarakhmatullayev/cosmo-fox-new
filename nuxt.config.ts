// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxtjs/i18n", "@nuxt/image"],

  css: ["~/assets/fonts/stylesheet.css", "~/assets/scss/main.scss"],

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/logo.png"
        }
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { name: "format-detection", content: "telephone=no" }
      ]
    }
  },

  svgo: {
    componentPrefix: "icon",
    defaultImport: "component"
  },

  i18n: {
    locales: [
      { code: "ru", name: "ru", file: "ru.json" },
      { code: "en", name: "en", file: "en.json" }
    ],
    defaultLocale: "ru",
    langDir: "../app/locales",
    strategy: "prefix",

    detectBrowserLanguage: {
      fallbackLocale: "ru",
      useCookie: true,
      cookieKey: "locale",
      alwaysRedirect: true
    }
  }
});
