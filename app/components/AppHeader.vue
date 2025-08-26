<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__nav">
          <!-- Logo -->
          <nuxt-link-locale class="header__nav--logo" to="/">
            <nuxt-img src="/images/logo.png" alt="logo" format="webp" quality="80" />
          </nuxt-link-locale>

          <!-- Nav items -->
          <nav class="header__nav--links">
            <nuxt-link-locale v-for="nav in navs" :key="nav.to" active-class="active" :to="nav.to">
              {{ t(nav.label) }}
            </nuxt-link-locale>
            <a href="#">{{ t("nav.white-paper") }}</a>
            <a href="#">{{ t("nav.blog") }}</a>
          </nav>
        </div>

        <!-- Locales -->
        <div class="header__right">
          <ui-button href="#">{{ t("play") }}</ui-button>
          <div class="header__lang">
            <div class="header__lang--selected" @click="isLocaleVisible = !isLocaleVisible">
              <icon-array-down />
              <span>
                {{ t(String(locale)) }}
              </span>
            </div>
            <div v-if="isLocaleVisible" class="header__lang--list">
              <button
                v-for="l in locales"
                :key="l.code"
                :class="{ active: l.code === locale }"
                @click="handleLocaleChange(l.code)"
              >
                {{ t(String(l.name)) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { locales, setLocale, t, locale } = useI18n();
const isLocaleVisible = ref(false);

const navs = reactive([
  { to: "/about", label: "nav.about" },
  { to: "/mine", label: "nav.mine" },
  { to: "/token", label: "nav.token" },
  { to: "/roadmap", label: "nav.roadmap" },
  { to: "/partners", label: "nav.partners" }
]);

const handleLocaleChange = (code: "en" | "ru") => {
  setLocale(code);
  isLocaleVisible.value = false;
};
</script>
