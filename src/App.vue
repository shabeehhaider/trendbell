<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-zinc-900">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
  
</template>

<style scoped>
</style>
