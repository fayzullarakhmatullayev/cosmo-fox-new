<template>
  <section class="mine">
    <h2 class="title">{{ t("nav.mine") }}!</h2>

    <div class="mine__wrapper">
      <mine-card
        v-for="(mine, i) in mines"
        :key="mine.image"
        :mine="mine"
        :class="`mine__card--${i + 1} ${i % 2 === 0 ? 'on-top' : 'on-bottom'}`"
      />
    </div>

    <div class="mine__swiper">
      <swiper-container :items="mines">
        <template #item="{ item, i }">
          <mine-card :mine="item" :class="`mine__card--${i + 1} on-top`" />
        </template>
      </swiper-container>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const mines = reactive([
  {
    image: "/images/mine/mine-1.png",
    title: "mine1.title",
    text: ["mine1.text1", "mine1.text2"],
    slot: "/images/mine/mine-slot-1.png",
    imageSize: 225,
    top: 13
  },
  {
    image: "/images/mine/mine-2.png",
    title: "mine2.title",
    text: ["mine2.text1", "mine2.text2"],
    slot: "/images/mine/mine-slot-2.png",
    imageSize: 225,
    top: 50
  },
  {
    image: "/images/mine/mine-3.png",
    title: "mine3.title",
    text: ["mine3.text1", "mine3.text2"],
    slot: "/images/mine/mine-slot-4.png",
    imageSize: 207,
    top: 32
  },
  {
    image: "/images/mine/mine-4.png",
    title: "mine4.title",
    text: ["mine4.text1", "mine4.text2"],
    slot: "/images/mine/mine-slot-3.png",
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
