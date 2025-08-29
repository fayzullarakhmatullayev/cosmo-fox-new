<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__nav">
          <!-- Logo -->
          <nuxt-link-locale class="header__nav--logo" to="/" @click="handleLinkClick">
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
          <ui-button class="header__right--btn" href="#">{{ t("play") }}</ui-button>
          <div class="header__lang">
            <div class="header__lang--selected" @click="isLocaleVisible = !isLocaleVisible">
              <icon-array-down />
              <span>
                {{ t(String(locale)) }}
              </span>
            </div>
            <div class="header__lang--icon" @click="isLocaleVisible = !isLocaleVisible">
              <icon-locale />
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
          <div class="header__burger" @click="handleBurgerClick">
            <icon-close v-if="isMenuVisible" />
            <icon-burger v-else />
          </div>
        </div>
      </div>
    </div>
    <mobile-menu v-if="isMenuVisible" :navs="navs" @close="handleBurgerClick" />
  </header>
</template>

<script lang="ts" setup>
const { locales, setLocale, t, locale } = useI18n();
const isLocaleVisible = ref(false);
const isMenuVisible = ref(false);

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

const handleLinkClick = () => {
  setTimeout(() => {
    isMenuVisible.value = false;
    document.body.style.overflow = "unset";
  }, 100);
};

const handleBurgerClick = () => {
  isMenuVisible.value = !isMenuVisible.value;

  if (isMenuVisible.value) {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
};
</script>
