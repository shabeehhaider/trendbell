<script setup>
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="container-x flex max-w-2xl flex-col items-center py-24 text-center">
    <p class="eyebrow">Error 404</p>
    <h1 class="mt-3 font-display text-5xl font-semibold">Page not found</h1>
    <p class="mt-4 text-stone-600">
      We couldn’t find <code class="rounded bg-sand px-1.5 py-0.5 text-sm">{{ route.fullPath }}</code>.
    </p>
    <div class="mt-8 flex gap-3">
      <RouterLink to="/" class="btn-primary">Go home</RouterLink>
      <RouterLink to="/shop" class="btn-outline">Shop all</RouterLink>
    </div>
  </div>
</template>
