<template>
  <div class="token">
    <h2 class="title">токен zylo</h2>

    <div class="token__wrapper">
      <div v-for="card in cards" :key="card.image" class="token__card">
        <div class="token__card--content">
          <nuxt-img :src="card.image" alt="token-img" quality="60" format="webp" class="token__card--image" />
          <h2 class="token__card--text">{{ t(card.text) }}</h2>
        </div>
        <nuxt-img class="token__card--bg" src="/images/token-slot.png" alt="token" quality="60" format="webp" />
      </div>
    </div>
    <ui-button variant="medium" class="token__button" href="#">
      <span>white paper <icon-link /></span>
    </ui-button>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const cards = computed(() => [
  { image: "/images/token-1.png", text: "token.text1" },
  { image: "/images/token-2.png", text: "token.text2" },
  { image: "/images/token-3.png", text: "token.text3" },
  { image: "/images/token-4.png", text: "token.text4" }
]);
useHead({
  title: t("nav.token"),
  meta: [{ name: "description", content: "Token page" }]
});
</script>
