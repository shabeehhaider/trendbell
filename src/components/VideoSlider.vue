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
  class="fixed-width-image"
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
.hero {
  position: relative;
  z-index: 1;
  width: 100vw;       /* full viewport width or set a max */
  max-width: 1200px;  /* optional max width */
  margin: 0 auto;
  overflow: hidden;
}

.splide,
.splide__track,
.splide__list,
.splide__slide {
  width: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;       /* allow height to adapt freely */
}

.gradient-slide {
  position: relative;
  width: 100%;
}

.fixed-width-image {
  width: 800px;       /* uniform fixed width */
  height: auto;       /* height adjusts proportionally */
  object-fit: contain !important;
  object-position: center;
  display: block;
  max-height: 100vh;  /* optional limit to viewport height */
}



</style>