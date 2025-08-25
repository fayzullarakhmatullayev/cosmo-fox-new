<template>
  <div class="about">
    <div class="about__left">
      <nuxt-img src="/images/about-img.png" alt="about" format="webp" />
    </div>
    <div class="about__right">
      <h2 class="about__title">
        <span>{{ t("about.title") }}</span>
        <nuxt-img src="/images/about-line.png" alt="about-line" format="webp" />
      </h2>
      <ul class="about__list">
        <li v-for="list in lists" :key="list">{{ t(list) }}</li>
      </ul>

      <div class="about__footer">
        <button class="about__play">
          <nuxt-img src="/images/play.png" alt="play" format="webp" />
        </button>
        <p>{{ t("about.watch") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const lists = reactive(["about.list1", "about.list2", "about.list3", "about.list4"]);

useHead({
  title: t("nav.about"),
  meta: [{ name: "description", content: "About page" }]
});

definePageMeta({ page: "about" });
</script>
