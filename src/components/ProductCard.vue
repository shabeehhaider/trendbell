<script setup>
import Icon from './Icon.vue'
import { getCategory } from '@/data/catalog'
import { addToCart, toggleWishlist, isWished, formatPrice, onImgError } from '@/store/shop'

const props = defineProps({
  product: { type: Object, required: true },
})

const badgeClass = {
  New: 'bg-white text-ink',
  Bestseller: 'bg-ink text-white',
  Sale: 'bg-wine text-white',
}

function quickAdd() {
  addToCart(props.product, { color: props.product.colors[0]?.name || '', open: false })
}
</script>

<template>
  <article class="group relative flex flex-col">
    <div class="relative aspect-[3/4] overflow-hidden rounded-xl bg-sand sm:rounded-2xl">
      <RouterLink :to="{ name: 'product', params: { id: product.id } }" :aria-label="product.name">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          @error="onImgError"
        />
        <img
          v-if="product.images[1]"
          :src="product.images[1]"
          alt=""
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
          @error="onImgError"
        />
      </RouterLink>

      <span
        v-if="product.badge"
        class="absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] sm:left-3 sm:top-3 sm:px-3 sm:text-[11px] font-semibold uppercase tracking-wider shadow-sm"
        :class="badgeClass[product.badge]"
      >
        {{ product.badge }}
      </span>

      <button
        class="absolute right-2.5 top-2.5 grid h-9 w-9 sm:right-3 sm:top-3 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110"
        :class="isWished(product.id) ? 'text-wine' : 'text-ink'"
        :aria-label="isWished(product.id) ? 'Remove from wishlist' : 'Add to wishlist'"
        :aria-pressed="isWished(product.id)"
        @click="toggleWishlist(product)"
      >
        <Icon name="heart" :filled="isWished(product.id)" class="h-5 w-5" />
      </button>

      <!-- Touch screens: compact icon button; larger screens: full bar revealed on hover -->
      <button
        class="absolute bottom-2.5 right-2.5 grid h-10 w-10 place-items-center rounded-full bg-white/95 shadow-lg backdrop-blur transition active:scale-95 sm:hidden"
        aria-label="Add to bag"
        @click="quickAdd"
      >
        <Icon name="bag" class="h-5 w-5" />
      </button>
      <button
        class="absolute inset-x-3 bottom-3 hidden translate-y-2 items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-sm font-semibold opacity-0 shadow-lg backdrop-blur transition hover:bg-ink hover:text-white focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 sm:flex"
        @click="quickAdd"
      >
        <Icon name="bag" class="h-4 w-4" /> Add to bag
      </button>
    </div>

    <div class="mt-3 flex flex-1 flex-col px-1">
      <p class="text-[11px] font-medium uppercase tracking-wider text-stone-500">
        {{ getCategory(product.category)?.name }}
      </p>
      <RouterLink :to="{ name: 'product', params: { id: product.id } }" class="mt-1 line-clamp-1 text-sm font-semibold hover:text-wine sm:text-base">
        {{ product.name }}
      </RouterLink>
      <div class="mt-1 flex items-start justify-between gap-2">
        <p class="flex flex-wrap items-baseline gap-x-2 text-sm font-semibold sm:text-base">
          <span :class="product.compareAt ? 'text-wine' : ''">{{ formatPrice(product.price) }}</span>
          <span v-if="product.compareAt" class="text-xs font-normal text-stone-400 line-through">
            {{ formatPrice(product.compareAt) }}
          </span>
        </p>
        <div v-if="product.colors.length" class="mt-1 flex shrink-0 -space-x-1">
          <span
            v-for="c in product.colors.slice(0, 3)"
            :key="c.hex"
            :title="c.name"
            class="h-3.5 w-3.5 rounded-full border border-white ring-1 ring-ink/15"
            :style="{ backgroundColor: c.hex }"
          />
        </div>
      </div>
    </div>
  </article>
</template>
