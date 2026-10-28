<script setup>
import Navbar from './components/Navbar.vue'
import SiteFooter from './components/SiteFooter.vue'
import CartDrawer from './components/CartDrawer.vue'
import { shop } from './store/shop'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-ink">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <SiteFooter />
    <CartDrawer />

    <Transition
      enter-from-class="opacity-0 translate-y-2"
      leave-to-class="opacity-0 translate-y-2"
      enter-active-class="transition duration-200"
      leave-active-class="transition duration-200"
    >
      <div
        v-if="shop.toast && !shop.cartOpen"
        role="status"
        class="fixed bottom-6 left-1/2 z-[60] w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white shadow-xl"
      >
        {{ shop.toast }}
      </div>
    </Transition>
  </div>
</template>
