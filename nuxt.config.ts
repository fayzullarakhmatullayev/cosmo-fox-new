// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxtjs/i18n", "@nuxt/image"],

  css: [
    "~/assets/fonts/stylesheet.css",
    "~/assets/scss/main.scss",
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation"
  ],

  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: [
          "> 0.5%",
          "last 2 versions",
          "not dead",
          "Safari >= 9",
          "iOS >= 9",
          "Chrome >= 58",
          "Firefox >= 54",
          "Edge >= 16"
        ]
      }
    }
  },

  app: {
    head: {
      title: "Cosmo Fox",
      charset: "utf-8",
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
          content: "width=device-width, initial-scale=1, viewport-fit=cover"
        },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "format-detection", content: "telephone=no" },
        { name: "description", content: "Cosmo Fox landing page" }
      ]
    }
  },

  runtimeConfig: {
    public: {
      whitePaperUrl: process.env.NUXT_WHITE_PAPER_URL,
      blogUrl: process.env.NUXT_BLOG_URL,
      playUrl: process.env.NUXT_PLAY_URL,
      tgChatUrl: process.env.NUXT_TG_CHAT_URL,
      tgNewsUrl: process.env.NUXT_TG_NEWS_URL,
      discordUrl: process.env.NUXT_DISCORD_URL,
      twitterUrl: process.env.NUXT_TWITTER_URL,
      cookiePolicyUrl: process.env.NUXT_COOKIE_POLICY_URL,
      privacyPolicyUrl: process.env.NUXT_PRIVACY_POLICY_URL,
      tokenomicUrl: process.env.NUXT_TOKENNOMIC_URL,
      mediciUrl: process.env.NUXT_MEDICI_URL,
      icodaUrl: process.env.NUXT_ICODA_URL,
      cicadaUrl: process.env.NUXT_CICADA_URL,
      tonUrl: process.env.NUXT_TON_URL
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
