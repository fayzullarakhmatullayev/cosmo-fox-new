// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxtjs/i18n", "@nuxt/image"],

  css: [
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation",
    "~/assets/fonts/stylesheet.css",
    "~/assets/scss/main.scss"
  ],

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/logo.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/home-bg.jpg"
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/all-bg.jpg"
        }
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
