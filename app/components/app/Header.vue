<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__nav">
          <nuxt-link-locale class="header__nav--logo" style="width: 40px; display: block">
            <img src="/images/logo.png" alt="logo" />
          </nuxt-link-locale>
          <nav class="header__nav--links">
            <nuxt-link-locale v-for="nav in navs" :key="nav.to" active-class="active" :to="nav.to">
              {{ t(nav.label) }}
            </nuxt-link-locale>
            <a href="#">{{ t("nav.white-paper") }}</a>
            <a href="#">{{ t("nav.blog") }}</a>
          </nav>
        </div>
        <div class="header__lang">
          <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
            {{ t(locale.name as string) }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { locales, setLocale, t } = useI18n();

const navs = reactive([
  { to: "/", label: "nav.home" },
  { to: "/about", label: "nav.about" },
  { to: "/mine", label: "nav.mine" },
  { to: "/token", label: "nav.token" },
  { to: "/roadmap", label: "nav.roadmap" },
  { to: "/partners", label: "nav.partners" }
]);
</script>

<style lang="scss"></style>
