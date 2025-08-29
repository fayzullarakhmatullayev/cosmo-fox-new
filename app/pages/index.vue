<template>
  <section class="home">
    <div class="home__wrapper">
      <div class="home__video">
        <video src="/videos/title.mp4" autoplay loop muted />
      </div>
      <div class="home__content">
        <h1 class="home__title">{{ t("home.title") }}</h1>
        <ul class="home__list">
          <li v-for="list in lists" :key="list">{{ t(list) }}</li>
        </ul>
        <ui-button class="home__button" variant="large" href="#">{{ t("play") }}</ui-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const lists = reactive(["home.list1", "home.list2", "home.list3"]);

useHead({
  title: t("nav.home"),
  meta: [{ name: "description", content: "Main page" }]
});
definePageMeta({ page: "home" });
</script>
