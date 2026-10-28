<template>
  <Splide
    :options="{
      type: 'fade',
      rewind: true,
      autoplay: true,
      interval: 4500,
      speed: 800,
      pauseOnHover: true,
      arrows: false,
      pagination: true,
    }"
    aria-label="Trendbell collections"
    class="hero-slider aspect-square overflow-hidden rounded-3xl bg-white shadow-2xl shadow-ink/10 sm:rounded-[2rem]"
  >
    <SplideSlide v-for="(image, idx) in images" :key="idx">
      <img :src="image" :alt="`Trendbell collection ${idx + 1}`" class="h-full w-full object-cover" />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import slider1 from '../assets/images/slider-1.png'
import slider2 from '../assets/images/slider-2.png'
import slider3 from '../assets/images/slider-3.png'
import slider5 from '../assets/images/slider-5.png'
import slider6 from '../assets/images/slider-6.png'

// slider-4 is portrait, so it is left out of the square hero frame
const images = [slider6, slider1, slider2, slider3, slider5]
</script>

<style scoped>
/* Keep every slide locked to the square frame, whatever the screen width */
.hero-slider :deep(.splide__track),
.hero-slider :deep(.splide__list),
.hero-slider :deep(.splide__slide) {
  height: 100%;
}
.hero-slider :deep(.splide__pagination) {
  bottom: 1rem;
}
.hero-slider :deep(.splide__pagination__page) {
  background: rgba(28, 25, 23, 0.25);
  width: 8px;
  height: 8px;
  transition: all 0.3s;
}
.hero-slider :deep(.splide__pagination__page.is-active) {
  background: #7b2d3b;
  transform: none;
  width: 24px;
  border-radius: 9999px;
}
</style>
