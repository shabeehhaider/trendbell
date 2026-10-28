<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import Icon from '../components/Icon.vue'
import { getProduct, getCategory, getDepartment, products } from '@/data/catalog'
import { addToCart, toggleWishlist, isWished, formatPrice, whatsAppProductLink, onImgError } from '@/store/shop'

const route = useRoute()
const product = computed(() => getProduct(route.params.id))

const activeImage = ref(0)
const color = ref('')
const qty = ref(1)

watch(
  product,
  (p) => {
    activeImage.value = 0
    qty.value = 1
    color.value = p?.colors[0]?.name || ''
    if (p) document.title = `${p.name} — Trendbell`
  },
  { immediate: true }
)

const related = computed(() => {
  if (!product.value) return []
  const same = products.filter((p) => p.category === product.value.category && p.id !== product.value.id)
  const dept = products.filter(
    (p) => p.department === product.value.department && p.category !== product.value.category
  )
  return [...same, ...dept].slice(0, 4)
})

const sections = computed(() =>
  [
    { title: 'Package details', body: product.value?.details },
    { title: 'Materials', body: product.value?.materials },
    { title: 'Care instructions', body: product.value?.careInstructions },
    { title: 'Delivery & exchange', body: 'Delivered nationwide across Pakistan with cash on delivery. Message us on WhatsApp for delivery timelines and exchange help.' },
  ].filter((s) => s.body)
)
</script>

<template>
  <div v-if="product" class="pb-20 lg:pb-0">
    <div class="container-x py-5 lg:py-10">
      <nav class="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:mb-6 text-stone-500" aria-label="Breadcrumb">
        <RouterLink to="/" class="hover:text-ink">Home</RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'shop', query: { dept: product.department } }" class="hover:text-ink">
          {{ getDepartment(product.department)?.name }}
        </RouterLink>
        <span>/</span>
        <RouterLink :to="{ name: 'shop', query: { dept: product.department, cat: product.category } }" class="hover:text-ink">
          {{ getCategory(product.category)?.name }}
        </RouterLink>
        <span>/</span>
        <span class="text-ink">{{ product.name }}</span>
      </nav>

      <div class="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <!-- Gallery -->
        <div class="flex min-w-0 flex-col-reverse gap-3 sm:flex-row">
          <div v-if="product.images.length > 1" class="no-scrollbar flex gap-3 overflow-x-auto sm:w-20 sm:flex-col sm:overflow-visible">
            <button
              v-for="(img, i) in product.images"
              :key="i"
              class="aspect-[3/4] w-16 shrink-0 overflow-hidden rounded-lg sm:w-20 sm:rounded-xl ring-offset-2 transition"
              :class="activeImage === i ? 'ring-2 ring-ink' : 'opacity-70 hover:opacity-100'"
              :aria-label="`View image ${i + 1}`"
              @click="activeImage = i"
            >
              <img :src="img" alt="" class="h-full w-full object-cover" @error="onImgError" />
            </button>
          </div>
          <div class="relative flex-1 overflow-hidden rounded-2xl bg-sand sm:rounded-3xl">
            <img
              :src="product.images[activeImage]"
              :alt="product.name"
              class="aspect-[3/4] w-full object-cover"
              @error="onImgError"
            />
            <span v-if="product.badge" class="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow">
              {{ product.badge }}
            </span>
          </div>
        </div>

        <!-- Details -->
        <div class="min-w-0 lg:sticky lg:top-32 lg:self-start">
          <p class="eyebrow">{{ getCategory(product.category)?.name }}</p>
          <h1 class="mt-2 font-display text-[1.75rem] font-semibold leading-tight sm:text-4xl">{{ product.name }}</h1>
          <p class="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:mt-4">
            <span class="text-2xl font-semibold" :class="product.compareAt ? 'text-wine' : ''">{{ formatPrice(product.price) }}</span>
            <span v-if="product.compareAt" class="text-base text-stone-400 line-through">{{ formatPrice(product.compareAt) }}</span>
            <span v-if="product.compareAt" class="rounded-full bg-wine-light px-2.5 py-0.5 text-xs font-semibold text-wine">
              Save {{ Math.round((1 - product.price / product.compareAt) * 100) }}%
            </span>
          </p>
          <p class="mt-5 leading-relaxed text-stone-600">{{ product.description }}</p>

          <div v-if="product.colors.length" class="mt-6">
            <p class="text-sm font-semibold">Colour: <span class="font-normal text-stone-600">{{ color }}</span></p>
            <div class="mt-3 flex flex-wrap gap-3">
              <button
                v-for="c in product.colors"
                :key="c.hex"
                class="h-9 w-9 rounded-full border border-ink/10 ring-offset-2 transition"
                :class="color === c.name ? 'ring-2 ring-ink' : 'hover:ring-2 hover:ring-ink/30'"
                :style="{ backgroundColor: c.hex }"
                :aria-label="c.name"
                :aria-pressed="color === c.name"
                @click="color = c.name"
              />
            </div>
          </div>

          <div class="mt-8 flex gap-2 sm:gap-3">
            <div class="flex shrink-0 items-center rounded-full border border-ink/15">
              <button class="p-2.5 sm:p-3" aria-label="Decrease quantity" @click="qty = Math.max(1, qty - 1)">
                <Icon name="minus" class="h-4 w-4" />
              </button>
              <span class="w-6 text-center font-medium sm:w-8">{{ qty }}</span>
              <button class="p-2.5 sm:p-3" aria-label="Increase quantity" @click="qty++">
                <Icon name="plus" class="h-4 w-4" />
              </button>
            </div>
            <button class="btn-primary min-w-0 flex-1 !px-4" @click="addToCart(product, { qty, color })">
              <Icon name="bag" class="h-5 w-5" /> Add to bag
            </button>
            <button
              class="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/15 transition hover:border-ink"
              :class="isWished(product.id) ? 'text-wine' : ''"
              :aria-label="isWished(product.id) ? 'Remove from wishlist' : 'Add to wishlist'"
              :aria-pressed="isWished(product.id)"
              @click="toggleWishlist(product)"
            >
              <Icon name="heart" :filled="isWished(product.id)" class="h-5 w-5" />
            </button>
          </div>
          <a :href="whatsAppProductLink(product, color)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp mt-3 w-full !py-3.5">
            <Icon name="whatsapp" class="h-5 w-5" /> Order instantly on WhatsApp
          </a>

          <ul class="mt-6 grid grid-cols-2 gap-3 text-xs text-stone-600">
            <li class="flex items-center gap-2"><Icon name="truck" class="h-5 w-5 text-wine" /> Nationwide delivery</li>
            <li class="flex items-center gap-2"><Icon name="cash" class="h-5 w-5 text-wine" /> Cash on delivery</li>
          </ul>

          <div class="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            <details v-for="(s, i) in sections" :key="s.title" class="group py-4" :open="i === 0">
              <summary class="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                {{ s.title }}
                <Icon name="chevronDown" class="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <p class="mt-3 text-sm leading-relaxed text-stone-600">{{ s.body }}</p>
            </details>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky buy bar on small screens -->
    <div class="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-white/95 px-4 py-3 backdrop-blur lg:hidden" style="padding-bottom: max(0.75rem, env(safe-area-inset-bottom))">
      <div class="mx-auto flex max-w-2xl items-center gap-3">
        <div class="min-w-0 flex-1">
          <p class="truncate text-xs text-stone-500">{{ product.name }}</p>
          <p class="text-base font-semibold" :class="product.compareAt ? 'text-wine' : ''">{{ formatPrice(product.price) }}</p>
        </div>
        <a :href="whatsAppProductLink(product, color)" target="_blank" rel="noopener noreferrer" class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-600 text-white" aria-label="Order on WhatsApp">
          <Icon name="whatsapp" class="h-5 w-5" />
        </a>
        <button class="btn-primary shrink-0 !px-5 !py-3" @click="addToCart(product, { qty, color })">
          <Icon name="bag" class="h-4 w-4" /> Add to bag
        </button>
      </div>
    </div>

    <section v-if="related.length" class="container-x pt-12 lg:pt-20">
      <h2 class="mb-6 font-display text-2xl font-semibold sm:mb-8 sm:text-3xl">You may also like</h2>
      <div class="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-6">
        <ProductCard v-for="p in related" :key="p.id" :product="p" />
      </div>
    </section>
  </div>

  <div v-else class="container-x flex flex-col items-center gap-4 py-24 text-center">
    <h1 class="font-display text-3xl font-semibold">Product not found</h1>
    <p class="text-stone-500">It may have sold out or moved.</p>
    <RouterLink to="/shop" class="btn-primary">Back to shop</RouterLink>
  </div>
</template>
