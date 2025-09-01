<template>
  <section class="home hero" :class="{ fast: !isSlowConnection }">
    <div class="container">
      <div class="home__wrapper">
        <div class="home__video">
          <template v-if="mounted">
            <img v-if="isIOS()" src="/images/title-fallback.png" alt="Video fallback" />
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
          <ui-button class="home__button" variant="large" href="#">{{ t("play") }}</ui-button>
        </div>
      </div>
    </div>
    <nuxt-img v-if="isSlowConnection" src="/images/home-bg.jpg" alt="bg" format="webp" quality="80" class="bg-img" />
    <video v-else autoplay loop muted playsinline preload="auto" src="/videos/fox_pilot.mp4" class="bg-img"></video>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const lists = reactive(["home.list1", "home.list2", "home.list3"]);
const isSlowConnection = ref(false);
const mounted = ref(false);

function isIOS() {
  return /iPad|iPhone|iPod|Safari|AppleWebKit/.test(navigator.userAgent);
}

const testSpeed = async () => {
  try {
    const startTime = performance.now();

    const response = await fetch("/images/all-bg.jpg?" + Math.random(), {
      cache: "no-cache"
    });
    await response.blob();
    const endTime = performance.now();

    const duration = endTime - startTime;
    const fileSizeKB = 10;
    const speedKbps = (fileSizeKB * 8) / (duration / 1000);
    console.log(speedKbps);
    return speedKbps < 500;
  } catch {
    return true;
  }
};

onMounted(async () => {
  mounted.value = true;
  isSlowConnection.value = await testSpeed();
});
</script>
