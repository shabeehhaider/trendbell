<template>
  <div class="w-full gradient-background" style="height: 650px;">
    <Splide
      :options="{
        type: 'loop',
        autoplay: true,
        interval: 30000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        pagination: true,
        height: '650px',
        width: '100%',
        cover: true,
        fixedHeight: true,
      }"
      class="w-full"
      style="height: 650px;"
      ref="splideRef"
      @moved="onSlideMoved"
    >
      <SplideSlide 
        v-for="(video, idx) in videos" 
        :key="video" 
        class="relative w-full overflow-hidden gradient-slide flex items-center justify-center"
        style="height: 650px;"
      >
        <video
          :src="video"
          class="w-full max-h-full object-contain"
          style="height: 650px;"
          autoplay
          muted
          playsinline
          preload="metadata"
          @ended="onVideoEnded(idx, $event)"
          ref="el => setVideoRef(idx, el)"
        ></video>
        <div class="absolute inset-0 gradient-overlay pointer-events-none"></div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import slider1 from '../assets/images/slider-1.mp4'
import slider2 from '../assets/images/slider-2.mp4'
import slider3 from '../assets/images/slider-3.mp4'

const videos = [slider1, slider2, slider3]
const splideRef = ref(null)
const videoRefs = ref([])
const currentSlide = ref(0)

function setVideoRef(idx, el) {
  if (el) videoRefs.value[idx] = el
}

function onSlideMoved(newIdx) {
  currentSlide.value = newIdx
  // Always play the video on the new slide
  const vid = videoRefs.value[newIdx]
  if (vid) {
    vid.currentTime = 0
    vid.play().catch(() => {})
  }
}

function onVideoEnded(idx, event) {
  // If the video ends before the interval, restart it (only for the active slide)
  if (idx === currentSlide.value) {
    event.target.currentTime = 0
    event.target.play().catch(() => {})
  }
}

onMounted(() => {
  // Set initial current slide
  currentSlide.value = 0
})
</script>

<style scoped>
/* Lighter elegant gradient backgrounds */
.gradient-background {
  background: linear-gradient(135deg, 
    #f3f4f6 0%, 
    #e0e7ff 25%, 
    #f1f5f9 50%, 
    #e0e7ff 75%, 
    #f3f4f6 100%);
}

.gradient-slide {
  background: radial-gradient(ellipse at center, 
    rgba(224, 231, 255, 0.3) 0%, 
    rgba(241, 245, 249, 0.5) 50%, 
    rgba(243, 244, 246, 0.8) 100%);
}

.gradient-overlay {
  background: linear-gradient(
    45deg,
    rgba(236, 233, 254, 0.2) 0%,
    transparent 30%,
    transparent 70%,
    rgba(224, 231, 255, 0.2) 100%
  );
}

.splide {
  height: 650px !important;
}
.splide__track {
  height: 650px !important;
}
.splide__list {
  height: 650px !important;
}
.splide__slide {
  height: 650px !important;
}
video {
  width: 100% !important;
  height: 650px !important;
  object-fit: contain !important;
  object-position: center;
}
.splide__pagination {
  bottom: 2rem;
  z-index: 10;
}
.splide__pagination__page {
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(224, 231, 255, 0.6));
  border: 2px solid rgba(224, 231, 255, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  margin: 0 0.5rem;
  backdrop-filter: blur(10px);
}
.splide__pagination__page.is-active {
  background: linear-gradient(135deg, #6366f1, #818cf8);
  border-color: #6366f1;
  transform: scale(1.2);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.2);
}
.splide__pagination__page:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(224, 231, 255, 0.7));
  transform: scale(1.1);
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.2);
}
</style>