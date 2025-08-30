<template>
  <div class="swiper__container">
    <swiper
      :modules="[Navigation, Pagination]"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :breakpoints="{
        768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 0 },
        640: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 }
      }"
      :loop="true"
    >
      <swiper-slide v-for="(item, i) in items" :key="i">
        <slot name="item" :item="item" :i="i" />
      </swiper-slide>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev">
        <icon-prev />
      </div>
      <div class="swiper-button-next">
        <icon-next />
      </div>
    </swiper>
  </div>
</template>

<script lang="ts" generic="T" setup>
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

defineProps<{ items: T[] }>();
</script>
