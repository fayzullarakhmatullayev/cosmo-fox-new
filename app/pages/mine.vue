<template>
  <section class="mine">
    <h2 class="title">{{ t("nav.mine") }}!</h2>

    <div class="mine__wrapper">
      <div v-for="(mine, i) in mines" :key="mine.image" class="mine__card" :class="`mine__card--${i + 1}`">
        <div v-if="mine.isOnTop" class="mine__card--picture on-top">
          <nuxt-img :src="mine.slot" alt="mine-slot" quality="60" format="webp" class="mine__card--slot" />
          <div class="mine__card--image" :style="{ width: `${mine.imageSize}px`, top: `${mine.top}px` }">
            <nuxt-img :src="mine.image" alt="mine" quality="60" format="webp" />
          </div>
        </div>
        <h3 class="mine__card--title">{{ t(mine.title) }}</h3>
        <ul class="mine__card--list">
          <li v-for="text in mine.text" :key="text">{{ t(text) }}</li>
        </ul>
        <div v-if="!mine.isOnTop" class="mine__card--picture on-bottom">
          <nuxt-img :src="mine.slot" alt="mine-slot" quality="60" format="webp" class="mine__card--slot" />

          <div class="mine__card--image" :style="{ width: `${mine.imageSize}px`, top: `${mine.top}px` }">
            <nuxt-img :src="mine.image" alt="mine" quality="60" format="webp" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const mines = reactive([
  {
    image: "/images/mine-1.png",
    title: "mine1.title",
    text: ["mine1.text1", "mine1.text2"],
    slot: "/images/mine-slot-1.png",
    isOnTop: true,
    imageSize: 225,
    top: 13
  },
  {
    image: "/images/mine-2.png",
    title: "mine2.title",
    text: ["mine2.text1", "mine2.text2"],
    slot: "/images/mine-slot-2.png",
    isOnTop: false,
    imageSize: 225,
    top: 50
  },
  {
    image: "/images/mine-3.png",
    title: "mine3.title",
    text: ["mine3.text1", "mine3.text2"],
    slot: "/images/mine-slot-4.png",
    isOnTop: true,
    imageSize: 207,
    top: 32
  },
  {
    image: "/images/mine-4.png",
    title: "mine4.title",
    text: ["mine4.text1", "mine4.text2"],
    slot: "/images/mine-slot-3.png",
    isOnTop: false,
    imageSize: 207,
    top: 68
  }
]);

useHead({
  title: t("nav.mine"),
  meta: [{ name: "description", content: "Mine page" }]
});

definePageMeta({ page: "mine" });
</script>
