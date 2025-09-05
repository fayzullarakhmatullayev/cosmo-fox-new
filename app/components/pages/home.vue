<template>
  <section id="home" class="home hero" :class="{ fast: !isSlowConnection }">
    <div class="container">
      <div class="home__wrapper">
        <div class="home__video">
          <template v-if="mounted">
            <img v-if="isIOS" src="/images/title-fallback.png" alt="Video fallback" />
            <video v-else autoplay loop muted playsinline preload="auto" src="/videos/title.mp4">
              <source src="/videos/title.mp4" type="video/mp4" />
            </video>
          </template>
        </div>
        <div class="home__content">
          <h1 class="home__title">{{ t("home.title") }}</h1>
          <ul class="home__list">
            <li v-for="list in lists" :key="list">{{ t(list) }}</li>
          </ul>
          <ui-button class="home__button" variant="large" :href="config.public.playUrl" target="_blank">
            {{ t("play") }}
          </ui-button>
        </div>
      </div>
    </div>

    <video
      v-if="!isSlowConnection"
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      preload="metadata"
      src="/videos/fox_pilot.mp4"
      class="bg-img"
    ></video>
    <nuxt-img v-else src="/images/home-bg.jpg" alt="bg" format="webp" quality="80" class="bg-img" />
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const config = useRuntimeConfig();
const { isSlowConnection } = useConnectionSpeed();

const lists = reactive(["home.list1", "home.list2", "home.list3"]);
const mounted = ref(false);

const isIOS = computed(() => {
  return /iPad|iPhone|iPod|Safari|AppleWebKit/.test(navigator?.userAgent);
});

onMounted(() => {
  mounted.value = true;
});
</script>
