<template>
  <nav class="w-full bg-white/80 border-b border-zinc-200/50 backdrop-blur min-h-20 flex items-center">
    <div class="w-full max-w-6xl mx-auto flex items-center justify-between px-4">
      <div class="flex items-center gap-3">
        <img src="../assets/images/logo.jpeg" alt="Trendbell Logo" class="h-14 w-14 object-contain rounded" />
      </div>
      <ul class="flex items-center gap-6 text-base font-medium">
        <li>
          <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="hover:text-blue-600">About</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
</style>
