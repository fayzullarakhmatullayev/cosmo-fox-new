<template>
  <div class="token">
    <h2 class="title">{{ $t("token_zylo") }}</h2>

    <div class="token__wrapper">
      <token-card v-for="card in cards" :key="card.image" :card="card" />
    </div>

    <div class="token__swiper">
      <swiper-container :items="cards">
        <template #item="{ item }">
          <token-card :card="item" />
        </template>
      </swiper-container>
    </div>

    <ui-button variant="medium" class="token__button" href="#">
      <span>white paper <icon-link /></span>
    </ui-button>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const cards = computed(() => [
  { image: "/images/token/token-1.png", text: "token.text1" },
  { image: "/images/token/token-2.png", text: "token.text2" },
  { image: "/images/token/token-3.png", text: "token.text3" },
  { image: "/images/token/token-4.png", text: "token.text4" }
]);
useHead({
  title: t("nav.token"),
  meta: [{ name: "description", content: "Token page" }]
});
</script>
