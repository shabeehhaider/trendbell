<template>
  <div class="w-full gradient-background hero">
    <Splide
      :options="{
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 7000,
        speed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        pagination: true,
      }"
      class="w-full"
      ref="splideRef"
      @moved="onSlideMoved"
    >
      <SplideSlide 
        v-for="(video, idx) in videos" 
        :key="video" 
        class="relative w-full overflow-hidden gradient-slide flex items-center justify-center"
      >
        <video
          :src="video"
          class="w-full h-full object-cover"
          autoplay
          muted
          playsinline
          preload="metadata"
          @ended="onVideoEnded(idx, $event)"
          :ref="el => setVideoRef(idx, el)"
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
  videoRefs.value.forEach((v, i) => {
    if (!v) return
    if (i === newIdx) {
      try { v.currentTime = 0; v.play() } catch (e) {}
    } else {
      try { v.pause() } catch (e) {}
    }
  })
}

function onVideoEnded(idx, event) {
  if (idx === currentSlide.value) {
    event.target.currentTime = 0
    event.target.play().catch(() => {})
  }
}

onMounted(() => {
  currentSlide.value = 0
  const vid = videoRefs.value[0]
  if (vid) {
    try { vid.currentTime = 0; vid.play() } catch (e) {}
  }
})
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
  height: 650px;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 1024px) { 
  .hero { height: 520px; } 
}

@media (max-width: 640px) { 
  .hero { height: 380px; } 
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

video {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
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