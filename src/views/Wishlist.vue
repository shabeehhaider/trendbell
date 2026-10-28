<script setup>
import { computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import Icon from '../components/Icon.vue'
import { getProduct } from '@/data/catalog'
import { shop } from '@/store/shop'

const items = computed(() => shop.wishlist.map(getProduct).filter(Boolean))
</script>

<template>
  <div class="container-x py-10 lg:py-14">
    <h1 class="font-display text-4xl font-semibold sm:text-5xl">Wishlist</h1>
    <p class="mt-2 text-stone-600">Pieces you’ve saved for later.</p>

    <div v-if="items.length" class="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      <ProductCard v-for="p in items" :key="p.id" :product="p" />
    </div>
    <div v-else class="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-cream px-6 py-20 text-center">
      <Icon name="heart" class="h-10 w-10 text-stone-400" />
      <p class="font-display text-2xl">Nothing saved yet</p>
      <p class="text-sm text-stone-500">Tap the heart on any product to keep it here.</p>
      <RouterLink to="/shop" class="btn-primary">Browse the collection</RouterLink>
    </div>
  </div>
</template>
