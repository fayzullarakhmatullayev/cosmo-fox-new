<template>
  <div class="mine__card">
    <div class="mine__card--content">
      <h3 class="mine__card--title">{{ t(mine.title) }}</h3>
      <ul class="mine__card--list">
        <li v-for="text in mine.text" :key="text">{{ t(text) }}</li>
      </ul>
    </div>

    <div class="mine__card--picture">
      <nuxt-img :src="mine.slot" alt="mine-slot" quality="60" format="webp" class="mine__card--slot" />

      <div class="mine__card--image" :style="{ width: `${mine.imageSize}px`, top: `${mine.top}px` }">
        <nuxt-img :src="mine.image" alt="mine" quality="60" format="webp" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  image: string;
  title: string;
  text: string[];
  slot: string;
  imageSize: number;
  top: number;
};

defineProps<{ mine: Props }>();

const { t } = useI18n();
</script>
