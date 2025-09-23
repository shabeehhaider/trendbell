<script setup>
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
    <header class="border-b border-zinc-200/50 dark:border-zinc-700/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
      <nav class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/vite.svg" alt="Vite" class="h-6 w-6" />
          <span class="font-semibold">Trendbell</span>
        </div>
        <ul class="flex items-center gap-4 text-sm">
          <li>
            <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-blue-600">About</RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
  
</template>

<style scoped>
</style>
