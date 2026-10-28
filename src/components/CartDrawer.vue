<script setup>
import { watch } from 'vue'
import Icon from './Icon.vue'
import { shop, cartLines, cartCount, cartTotal, updateQty, formatPrice, whatsAppCartLink, onImgError } from '@/store/shop'

watch(
  () => shop.cartOpen,
  (open) => (document.body.style.overflow = open ? 'hidden' : '')
)
</script>

<template>
  <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition" leave-active-class="transition">
    <div v-if="shop.cartOpen" class="fixed inset-0 z-50 bg-black/40" @click="shop.cartOpen = false" />
  </Transition>
  <Transition enter-from-class="translate-x-full" leave-to-class="translate-x-full" enter-active-class="transition duration-300" leave-active-class="transition duration-200">
    <aside
      v-if="shop.cartOpen"
      class="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
      aria-label="Shopping bag"
      @keydown.esc="shop.cartOpen = false"
    >
      <div class="flex items-center justify-between border-b border-ink/10 px-5 py-4">
        <h2 class="font-display text-xl font-semibold">Your bag <span class="text-stone-400">({{ cartCount }})</span></h2>
        <button class="rounded-full p-2 hover:bg-sand" aria-label="Close bag" @click="shop.cartOpen = false">
          <Icon name="close" class="h-6 w-6" />
        </button>
      </div>

      <div v-if="!cartLines.length" class="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
        <div class="grid h-16 w-16 place-items-center rounded-full bg-cream">
          <Icon name="bag" class="h-8 w-8 text-stone-400" />
        </div>
        <p class="font-display text-xl">Your bag is empty</p>
        <p class="text-sm text-stone-500">Explore our latest abayas, makna, formals and more.</p>
        <RouterLink to="/shop" class="btn-primary" @click="shop.cartOpen = false">Start shopping</RouterLink>
      </div>

      <template v-else>
        <ul class="flex-1 divide-y divide-ink/10 overflow-y-auto px-5">
          <li v-for="(line, i) in cartLines" :key="line.id + line.color" class="flex gap-4 py-4">
            <RouterLink :to="{ name: 'product', params: { id: line.id } }" class="shrink-0" @click="shop.cartOpen = false">
              <img :src="line.product.image" :alt="line.product.name" class="h-28 w-20 rounded-xl object-cover" @error="onImgError" />
            </RouterLink>
            <div class="flex min-w-0 flex-1 flex-col">
              <p class="truncate text-sm font-semibold">{{ line.product.name }}</p>
              <p v-if="line.color" class="text-xs text-stone-500">Colour: {{ line.color }}</p>
              <p class="mt-1 text-sm font-semibold">{{ formatPrice(line.product.price) }}</p>
              <div class="mt-auto flex items-center justify-between pt-2">
                <div class="flex items-center rounded-full border border-ink/15">
                  <button class="p-2" aria-label="Decrease quantity" @click="updateQty(i, line.qty - 1)">
                    <Icon name="minus" class="h-4 w-4" />
                  </button>
                  <span class="w-6 text-center text-sm font-medium">{{ line.qty }}</span>
                  <button class="p-2" aria-label="Increase quantity" @click="updateQty(i, line.qty + 1)">
                    <Icon name="plus" class="h-4 w-4" />
                  </button>
                </div>
                <button class="p-2 text-stone-400 hover:text-wine" aria-label="Remove item" @click="updateQty(i, 0)">
                  <Icon name="trash" class="h-5 w-5" />
                </button>
              </div>
            </div>
          </li>
        </ul>

        <div class="border-t border-ink/10 bg-cream px-5 py-5">
          <div class="flex items-center justify-between text-base">
            <span>Subtotal</span>
            <span class="font-semibold">{{ formatPrice(cartTotal) }}</span>
          </div>
          <p class="mt-1 text-xs text-stone-500">Delivery charges confirmed on WhatsApp. Cash on delivery available.</p>
          <a :href="whatsAppCartLink()" target="_blank" rel="noopener noreferrer" class="btn-whatsapp mt-4 w-full !py-3.5 text-base">
            <Icon name="whatsapp" class="h-5 w-5" /> Checkout on WhatsApp
          </a>
          <button class="mt-2 w-full py-2 text-sm font-medium text-stone-600 hover:text-ink" @click="shop.cartOpen = false">
            Continue shopping
          </button>
        </div>
      </template>
    </aside>
  </Transition>
</template>
