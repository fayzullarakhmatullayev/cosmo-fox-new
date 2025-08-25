<template>
  <div class="about">
    <div class="about__left">
      <nuxt-img src="/images/about-img.png" alt="about" format="webp" />
    </div>
    <div class="about__right">
      <h2 class="about__title">
        <span>ЧТО ТАКОЕ COSMOFOX</span>
        <nuxt-img src="/images/about-line.png" alt="about-line" format="webp" />
      </h2>
      <ul class="about__list">
        <li>CosmoFox — это космическое приключение, которое постоянно растёт и меняется.</li>
        <li>
          Всё начинается с простой гонки за ресурсами, а со временем превращается в целую вселенную с новыми механиками,
          более глубоким геймплеем и экономикой на $Zylo.
        </li>
        <li>Фаза 1 — динамичный кликер: буришь планеты, собираешь лут и зарабатываешь долю аирдропа.</li>
        <li>Фаза 2 — игра раскрывается: больше механик, новые испытания и свежие способы использовать $Zylo.</li>
      </ul>

      <div class="about__footer">
        <button class="about__play">
          <nuxt-img src="/images/play.png" alt="play" format="webp" />
        </button>
        <p>посмотреть трейлер</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("nav.about"),
  meta: [{ name: "description", content: "About page" }]
});

definePageMeta({ page: "about" });
</script>
