<template>
  <div class="token__card">
    <div class="token__card--content">
      <nuxt-img :src="card.image" alt="token-img" quality="60" format="webp" class="token__card--image" />
      <h2 class="token__card--text">{{ t(card.text) }}</h2>
    </div>
    <nuxt-img class="token__card--bg" src="/images/token/token-slot.png" alt="token" quality="60" format="webp" />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

type Props = {
  image: string;
  text: string;
};
const { card } = defineProps<{ card: Props }>();
</script>
