<script setup>
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="mx-auto max-w-2xl p-8 text-center">
    <h1 class="text-4xl font-bold tracking-tight">404</h1>
    <p class="mt-3 text-lg text-gray-600 dark:text-gray-400">
      The page <code class="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">{{ route.fullPath }}</code> could not be found.
    </p>
    <div class="mt-6">
      <RouterLink to="/" class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
        Go home
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
</style>
