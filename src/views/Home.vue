<script setup>
import { ref, computed } from 'vue'
import HeroSlider from '../components/HeroSlider.vue'
import ProductCard from '../components/ProductCard.vue'
import Icon from '../components/Icon.vue'
import { departments, categoriesFor, products, countIn, WHATSAPP_NUMBER } from '@/data/catalog'
import { onImgError } from '@/store/shop'

const hijabCategories = categoriesFor('hijab')

const tabs = [{ slug: 'all', name: 'All' }, ...departments]
const activeTab = ref('all')
const newArrivals = computed(() =>
  products
    .filter((p) => p.badge === 'New' && (activeTab.value === 'all' || p.department === activeTab.value))
    .slice(0, 8)
)
const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 4)

const perks = [
  { icon: 'truck', title: 'Nationwide delivery', text: 'Shipped to your doorstep anywhere in Pakistan' },
  { icon: 'cash', title: 'Cash on delivery', text: 'Pay when your order arrives' },
  { icon: 'refresh', title: 'Easy exchanges', text: 'Size or colour not right? We’ll help' },
  { icon: 'chat', title: 'WhatsApp support', text: 'Real people, quick replies' },
]

const categoryScroller = ref(null)
function scrollCategories(dir) {
  categoryScroller.value?.scrollBy({ left: dir * 320, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-cream">
      <div class="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-wine/10 blur-3xl" />
      <div class="container-x grid items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div class="text-center lg:text-left">
          <p class="eyebrow">New season · Women · Men · Modest</p>
          <h1 class="mt-4 font-display text-[2.1rem] font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Style that celebrates
            <span class="italic text-wine">every</span> you.
          </h1>
          <p class="mx-auto mt-4 max-w-lg text-[15px] sm:mt-5 sm:text-base text-stone-600 sm:text-lg lg:mx-0">
            Embroidered formals, tailored menswear and a complete hijab collection — abayas, chadars, makna and all the little essentials — in one place.
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <RouterLink to="/shop" class="btn-primary">Shop the collection <Icon name="arrowRight" class="h-4 w-4" /></RouterLink>
            <RouterLink :to="{ name: 'shop', query: { dept: 'hijab' } }" class="btn-outline">Explore Hijab & Modest</RouterLink>
          </div>
          <dl class="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4 sm:mt-10 lg:mx-0">
            <div>
              <dt class="text-xs text-stone-500">Products</dt>
              <dd class="font-display text-2xl font-semibold">{{ products.length }}+</dd>
            </div>
            <div>
              <dt class="text-xs text-stone-500">Categories</dt>
              <dd class="font-display text-2xl font-semibold">{{ departments.reduce((n, d) => n + categoriesFor(d.slug).length, 0) }}</dd>
            </div>
            <div>
              <dt class="text-xs text-stone-500">Ordering</dt>
              <dd class="font-display text-2xl font-semibold">1 tap</dd>
            </div>
          </dl>
        </div>
        <div class="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <HeroSlider />
        </div>
      </div>
    </section>

    <!-- Perks -->
    <section class="border-y border-ink/10 bg-white">
      <div class="container-x grid grid-cols-2 gap-x-4 gap-y-5 py-6 sm:gap-6 lg:grid-cols-4">
        <div v-for="p in perks" :key="p.title" class="flex items-start gap-3">
          <div class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-wine-light text-wine">
            <Icon :name="p.icon" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-sm font-semibold">{{ p.title }}</p>
            <p class="hidden text-xs text-stone-500 sm:block">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Departments -->
    <section class="container-x py-12 sm:py-16 lg:py-24">
      <div class="mb-8 text-center sm:mb-10">
        <p class="eyebrow">Shop by department</p>
        <h2 class="mt-2 font-display text-3xl font-semibold sm:text-4xl">Something for everyone</h2>
      </div>
      <div class="grid gap-4 md:grid-cols-3 lg:gap-6">
        <RouterLink
          v-for="d in departments"
          :key="d.slug"
          :to="{ name: 'shop', query: { dept: d.slug } }"
          class="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-sand sm:aspect-[16/9] md:aspect-[4/5]"
        >
          <img :src="d.image" :alt="d.name" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" @error="onImgError" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
            <h3 class="font-display text-2xl font-semibold lg:text-3xl">{{ d.name }}</h3>
            <p class="mt-1 text-sm text-white/80">{{ d.tagline }}</p>
            <span class="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition group-hover:bg-wine group-hover:text-white">
              Shop now <Icon name="arrowRight" class="h-4 w-4" />
            </span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Hijab essentials -->
    <section class="bg-cream py-12 sm:py-16 lg:py-24">
      <div class="container-x">
        <div class="mb-8 flex items-end justify-between gap-4">
          <div>
            <p class="eyebrow">The modest edit</p>
            <h2 class="mt-2 font-display text-3xl font-semibold sm:text-4xl">Hijab & modest essentials</h2>
            <p class="mt-2 max-w-xl text-stone-600">Everything you need, from statement abayas to the safety pin that holds it all together.</p>
          </div>
          <div class="hidden gap-2 sm:flex">
            <button class="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white hover:border-ink" aria-label="Scroll left" @click="scrollCategories(-1)">
              <Icon name="chevronLeft" class="h-5 w-5" />
            </button>
            <button class="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white hover:border-ink" aria-label="Scroll right" @click="scrollCategories(1)">
              <Icon name="chevronRight" class="h-5 w-5" />
            </button>
          </div>
        </div>
        <div ref="categoryScroller" class="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:scroll-px-0 sm:gap-4 sm:px-0">
          <RouterLink
            v-for="c in hijabCategories"
            :key="c.slug"
            :to="{ name: 'shop', query: { dept: 'hijab', cat: c.slug } }"
            class="group w-36 shrink-0 snap-start sm:w-48 lg:w-52"
          >
            <div class="aspect-[3/4] overflow-hidden rounded-2xl bg-sand">
              <img :src="c.image" :alt="c.name" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" @error="onImgError" />
            </div>
            <p class="mt-3 font-semibold group-hover:text-wine">{{ c.name }}</p>
            <p class="text-xs text-stone-500">{{ c.blurb }} · {{ countIn(c.slug) }} items</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- New arrivals -->
    <section class="container-x py-12 sm:py-16 lg:py-24">
      <div class="mb-8 flex flex-col items-center gap-5 text-center">
        <div>
          <p class="eyebrow">Just landed</p>
          <h2 class="mt-2 font-display text-3xl font-semibold sm:text-4xl">New arrivals</h2>
        </div>
        <div class="no-scrollbar flex max-w-full gap-2 overflow-x-auto" role="tablist">
          <button
            v-for="t in tabs"
            :key="t.slug"
            role="tab"
            :aria-selected="activeTab === t.slug"
            class="shrink-0 rounded-full px-5 py-2 text-sm font-medium transition"
            :class="activeTab === t.slug ? 'bg-ink text-white' : 'bg-sand hover:bg-stone-200'"
            @click="activeTab = t.slug"
          >
            {{ t.name }}
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        <ProductCard v-for="p in newArrivals" :key="p.id" :product="p" />
      </div>
      <div class="mt-10 text-center">
        <RouterLink :to="{ name: 'shop', query: { sort: 'new', ...(activeTab !== 'all' && { dept: activeTab }) } }" class="btn-outline">
          View all new arrivals
        </RouterLink>
      </div>
    </section>

    <!-- Editorial banner -->
    <section class="container-x">
      <div class="relative overflow-hidden rounded-3xl bg-ink text-white">
        <div class="grid items-center md:grid-cols-2">
          <div class="relative z-10 p-6 sm:p-12 lg:p-16">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">The abaya edit</p>
            <h2 class="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Grace in<br />every drape.</h2>
            <p class="mt-4 max-w-md text-white/70">Embellished cuffs, pearl sleeves and flowing silhouettes — abayas designed to be worn every day and remembered.</p>
            <RouterLink :to="{ name: 'shop', query: { dept: 'hijab', cat: 'abaya' } }" class="btn mt-8 bg-white text-ink hover:bg-wine hover:text-white">
              Shop abayas <Icon name="arrowRight" class="h-4 w-4" />
            </RouterLink>
          </div>
          <div class="grid h-full grid-cols-2 gap-2 p-2 md:p-3">
            <img
              v-for="p in products.filter((x) => x.category === 'abaya').slice(0, 2)"
              :key="p.id"
              :src="p.image"
              :alt="p.name"
              class="aspect-[3/4] h-full w-full rounded-2xl object-cover"
              loading="lazy"
              @error="onImgError"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Bestsellers -->
    <section class="container-x py-12 sm:py-16 lg:py-24">
      <div class="mb-8 flex items-end justify-between gap-4">
        <div>
          <p class="eyebrow">Loved by customers</p>
          <h2 class="mt-2 font-display text-3xl font-semibold sm:text-4xl">Bestsellers</h2>
        </div>
        <RouterLink :to="{ name: 'shop', query: { sort: 'popular' } }" class="hidden items-center gap-2 text-sm font-semibold hover:text-wine sm:inline-flex">
          Shop all <Icon name="arrowRight" class="h-4 w-4" />
        </RouterLink>
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-6">
        <ProductCard v-for="p in bestsellers" :key="p.id" :product="p" />
      </div>
    </section>

    <!-- Men & Women split -->
    <section class="container-x grid gap-4 md:grid-cols-2 lg:gap-6">
      <RouterLink
        v-for="c in [categoriesFor('women')[0], categoriesFor('men')[0]]"
        :key="c.slug"
        :to="{ name: 'shop', query: { dept: c.department, cat: c.slug } }"
        class="group relative flex aspect-[4/3] items-end sm:aspect-[16/10] overflow-hidden rounded-3xl bg-sand"
      >
        <img :src="c.image" :alt="c.name" class="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" loading="lazy" @error="onImgError" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div class="relative p-6 text-white sm:p-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{{ c.department === 'women' ? 'For her' : 'For him' }}</p>
          <h3 class="mt-2 font-display text-3xl font-semibold">{{ c.name }}</h3>
          <span class="mt-3 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 group-hover:underline">
            Discover <Icon name="arrowRight" class="h-4 w-4" />
          </span>
        </div>
      </RouterLink>
    </section>

    <!-- WhatsApp CTA -->
    <section class="container-x pt-12 sm:pt-16 lg:pt-24">
      <div class="flex flex-col items-center gap-6 rounded-3xl bg-wine-light px-6 py-12 text-center sm:px-12">
        <div class="grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
          <Icon name="whatsapp" class="h-7 w-7" />
        </div>
        <div>
          <h2 class="font-display text-3xl font-semibold">Need help choosing?</h2>
          <p class="mx-auto mt-2 max-w-lg text-stone-600">
            Send us a message for sizing, fabric details, custom colours or bulk hijab orders.
          </p>
        </div>
        <a :href="`https://wa.me/${WHATSAPP_NUMBER}`" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
          <Icon name="whatsapp" class="h-5 w-5" /> Chat on WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>
