<script setup>
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import { departments, categoriesFor, WHATSAPP_NUMBER } from '@/data/catalog'

const year = new Date().getFullYear()
const route = useRoute()
</script>

<template>
  <!-- Product pages have a sticky buy bar on small screens; leave room for it -->
  <footer class="mt-16 bg-ink text-stone-300 sm:mt-24" :class="route.name === 'product' ? 'pb-20 lg:pb-0' : ''">
    <div class="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-3 sm:py-16 lg:grid-cols-5">
      <div class="col-span-2 sm:col-span-3 lg:col-span-2">
        <RouterLink to="/" class="flex items-center gap-3">
          <img src="../assets/images/logo.jpeg" alt="" class="h-12 w-12 rounded-full object-cover" />
          <span class="font-display text-2xl font-semibold text-white">Trendbell</span>
        </RouterLink>
        <p class="mt-4 max-w-sm text-sm leading-relaxed">
          Modern fashion for women and men, and a complete modest-wear collection — from abayas and Irani chadars to makna, pins and scrunchies.
        </p>
        <a
          :href="`https://wa.me/${WHATSAPP_NUMBER}`"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-whatsapp mt-6"
        >
          <Icon name="whatsapp" class="h-5 w-5" /> Chat with us
        </a>
      </div>

      <div v-for="d in departments" :key="d.slug">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-white">{{ d.name }}</h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="c in categoriesFor(d.slug)" :key="c.slug">
            <RouterLink :to="{ name: 'shop', query: { dept: d.slug, cat: c.slug } }" class="transition hover:text-white">
              {{ c.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-xs sm:flex-row sm:text-left">
        <p>© {{ year }} Trendbell. All rights reserved.</p>
        <p>Cash on delivery · Nationwide shipping · Easy exchanges</p>
      </div>
    </div>
  </footer>
</template>
