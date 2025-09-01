<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__left">
          <nuxt-img
            src="/images/about/about-img.png"
            alt="about"
            format="webp"
            quality="70"
            class="about__img--desktop"
          />
          <nuxt-img
            src="/images/about/about-img-mobile.png"
            alt="about"
            format="webp"
            quality="70"
            class="about__img--mobile"
          />
        </div>
        <div class="about__right">
          <h2 class="about__title">
            <span>{{ t("about.title") }}</span>
            <nuxt-img src="/images/about/about-line.png" alt="about-line" format="webp" quality="80" />
          </h2>
          <ul class="about__list">
            <li v-for="list in lists" :key="list">{{ t(list) }}</li>
          </ul>

          <!-- <div class="about__footer" @click="isShow = true">
            <button class="about__play">
              <nuxt-img src="/images/about/play.png" alt="play" format="webp" quality="80" />
            </button>
            <p>{{ t("about.watch") }}</p>
          </div> -->
        </div>
        <transition name="fade" mode="out-in">
          <youtube-dialog v-if="isShow" @close="isShow = false" />
        </transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const lists = reactive(["about.list1", "about.list2", "about.list3", "about.list4"]);
const isShow = ref(false);
</script>
