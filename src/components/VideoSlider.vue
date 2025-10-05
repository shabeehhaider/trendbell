<template>
  <div class="w-full gradient-background hero">
    <Splide
      :options="{
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 5000,
        speed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        pagination: true,
      }"
      class="w-full h-full"
      ref="splideRef"
    >
      <SplideSlide 
        v-for="(image, idx) in images" 
        :key="idx" 
        class="relative w-full h-full overflow-hidden gradient-slide flex items-center justify-center"
      >
        <img
          :src="image"
          :alt="`Slide ${idx + 1}`"
          class="w-full h-full object-contain bg-black"
        />
        <div class="absolute inset-0 gradient-overlay pointer-events-none"></div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import slider1 from '../assets/images/slider-1.png'
import slider2 from '../assets/images/slider-2.png'
import slider3 from '../assets/images/slider-3.png'
import slider4 from '../assets/images/slider-4.png'
import slider5 from '../assets/images/slider-5.png'
import slider6 from '../assets/images/slider-6.png'

const images = [slider6, slider1, slider2, slider3, slider4, slider5]
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(180deg, #111827 0%, #0b0f1a 100%);
}

.gradient-overlay {
  background: radial-gradient(circle at center, rgba(0,0,0,0.0) 55%, rgba(0,0,0,0.25) 100%);
}

.hero {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  aspect-ratio: 1 / 1; /* Makes it square like your images */
}

@media (max-width: 1024px) { 
  .hero { 
    max-width: 100%;
  } 
}

@media (max-width: 640px) { 
  .hero { 
    max-width: 100%;
  } 
}

.splide,
.splide__track,
.splide__list,
.splide__slide { 
  height: 100% !important; 
  position: relative;
}

.gradient-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  object-position: center;
  display: block;
}

.splide__pagination { 
  bottom: 1.25rem; 
  z-index: 10;
  position: absolute;
}

.splide__pagination__page {
  width: 8px;
  height: 8px;
  background: rgba(255,255,255,0.6);
  border: none;
  margin: 0 6px;
  opacity: 0.8;
  transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
}

.splide__pagination__page.is-active {
  background: #ffffff;
  transform: scale(1.4);
  opacity: 1;
}

.splide__pagination__page:hover { 
  opacity: 1; 
}
</style>