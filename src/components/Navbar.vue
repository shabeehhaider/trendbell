<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Icon from './Icon.vue'
import { departments, categoriesFor } from '@/data/catalog'
import { shop, cartCount, onImgError } from '@/store/shop'

const route = useRoute()
const router = useRouter()

const mobileOpen = ref(false)
const openMenu = ref(null) // department slug whose mega menu is open
const searchOpen = ref(false)
const query = ref('')
const searchInput = ref(null)

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    openMenu.value = null
    searchOpen.value = false
  }
)

watch(mobileOpen, (open) => (document.body.style.overflow = open ? 'hidden' : ''))

async function toggleSearch() {
  searchOpen.value = !searchOpen.value
  if (searchOpen.value) {
    await nextTick()
    searchInput.value?.focus()
  }
}

function submitSearch() {
  const q = query.value.trim()
  router.push({ name: 'shop', query: q ? { q } : {} })
  query.value = ''
}

const announcements = [
  'Nationwide delivery across Pakistan',
  'Cash on delivery available',
  'Order in one tap on WhatsApp',
]
</script>

<template>
  <header class="sticky top-0 z-40">
    <!-- Announcement bar -->
    <div class="bg-ink text-white">
      <div class="container-x flex h-9 items-center justify-center gap-6 overflow-hidden text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">
        <span v-for="(a, i) in announcements" :key="a" :class="i > 0 ? 'hidden lg:inline' : ''">
          {{ a }}
        </span>
      </div>
    </div>

    <!-- Main bar -->
    <nav class="border-b border-ink/10 bg-white/90 backdrop-blur-md" @mouseleave="openMenu = null">
      <div class="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <div class="flex items-center gap-2 lg:hidden">
          <button class="-ml-2 rounded-full p-2 hover:bg-sand" aria-label="Open menu" @click="mobileOpen = true">
            <Icon name="menu" class="h-6 w-6" />
          </button>
        </div>

        <RouterLink to="/" class="flex items-center gap-2 sm:gap-3">
          <img src="../assets/images/logo.jpeg" alt="" class="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
          <span class="font-display text-lg font-semibold tracking-wide sm:text-xl lg:text-2xl">Trendbell</span>
        </RouterLink>

        <!-- Desktop links -->
        <ul class="hidden items-center gap-1 lg:flex">
          <li v-for="d in departments" :key="d.slug" @mouseenter="openMenu = d.slug">
            <RouterLink
              :to="{ name: 'shop', query: { dept: d.slug } }"
              class="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition hover:bg-sand"
              :class="route.query.dept === d.slug ? 'text-wine' : ''"
              :aria-expanded="openMenu === d.slug"
              @focus="openMenu = d.slug"
            >
              {{ d.name }}
              <Icon name="chevronDown" class="h-3.5 w-3.5" />
            </RouterLink>
          </li>
          <li @mouseenter="openMenu = null">
            <RouterLink :to="{ name: 'shop', query: { sort: 'new' } }" class="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-sand">
              New In
            </RouterLink>
          </li>
          <li @mouseenter="openMenu = null">
            <RouterLink :to="{ name: 'shop', query: { sale: '1' } }" class="rounded-full px-4 py-2 text-sm font-medium text-wine transition hover:bg-wine-light">
              Sale
            </RouterLink>
          </li>
          <li @mouseenter="openMenu = null">
            <RouterLink to="/about" class="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-sand">About</RouterLink>
          </li>
        </ul>

        <!-- Actions -->
        <div class="flex items-center gap-1">
          <button class="rounded-full p-2 hover:bg-sand" aria-label="Search" @click="toggleSearch">
            <Icon name="search" class="h-6 w-6" />
          </button>
          <RouterLink to="/wishlist" class="relative hidden rounded-full p-2 hover:bg-sand sm:block" aria-label="Wishlist">
            <Icon name="heart" class="h-6 w-6" />
            <span v-if="shop.wishlist.length" class="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-wine px-1 text-[10px] font-bold text-white">
              {{ shop.wishlist.length }}
            </span>
          </RouterLink>
          <button class="relative -mr-2 rounded-full p-2 hover:bg-sand" aria-label="Shopping bag" @click="shop.cartOpen = true">
            <Icon name="bag" class="h-6 w-6" />
            <span v-if="cartCount" class="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-wine px-1 text-[10px] font-bold text-white">
              {{ cartCount }}
            </span>
          </button>
        </div>
      </div>

      <!-- Search bar -->
      <Transition enter-from-class="opacity-0 -translate-y-1" leave-to-class="opacity-0 -translate-y-1" enter-active-class="transition" leave-active-class="transition">
        <div v-if="searchOpen" class="border-t border-ink/10 bg-white">
          <form class="container-x flex items-center gap-3 py-3" @submit.prevent="submitSearch">
            <Icon name="search" class="h-5 w-5 text-stone-400" />
            <input
              ref="searchInput"
              v-model="query"
              type="search"
              placeholder="Search abayas, makna, kurta, shawls…"
              class="flex-1 bg-transparent py-2 text-base outline-none placeholder:text-stone-400"
              @keydown.esc="searchOpen = false"
            />
            <button type="submit" class="btn-primary !px-5 !py-2">Search</button>
          </form>
        </div>
      </Transition>

      <!-- Mega menu -->
      <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition duration-150" leave-active-class="transition duration-100">
        <div v-if="openMenu" class="absolute inset-x-0 hidden border-b border-ink/10 bg-white shadow-xl lg:block">
          <div class="container-x grid grid-cols-12 gap-8 py-8">
            <div class="col-span-8">
              <p class="eyebrow mb-4">Shop {{ departments.find((d) => d.slug === openMenu).name }}</p>
              <ul class="grid grid-cols-2 gap-x-8 gap-y-1 xl:grid-cols-3">
                <li v-for="c in categoriesFor(openMenu)" :key="c.slug">
                  <RouterLink
                    :to="{ name: 'shop', query: { dept: openMenu, cat: c.slug } }"
                    class="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-cream"
                  >
                    <img :src="c.image" alt="" class="h-12 w-12 rounded-lg object-cover" loading="lazy" @error="onImgError" />
                    <span>
                      <span class="block text-sm font-semibold group-hover:text-wine">{{ c.name }}</span>
                      <span v-if="c.blurb" class="block text-xs text-stone-500">{{ c.blurb }}</span>
                    </span>
                  </RouterLink>
                </li>
              </ul>
              <RouterLink :to="{ name: 'shop', query: { dept: openMenu } }" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-wine">
                View all <Icon name="arrowRight" class="h-4 w-4" />
              </RouterLink>
            </div>
            <RouterLink
              :to="{ name: 'shop', query: { dept: openMenu } }"
              class="relative col-span-4 overflow-hidden rounded-2xl"
            >
              <img :src="departments.find((d) => d.slug === openMenu).image" alt="" class="h-full max-h-72 w-full object-cover" @error="onImgError" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p class="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                {{ departments.find((d) => d.slug === openMenu).tagline }}
              </p>
            </RouterLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>

  <!-- Mobile drawer -->
  <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition" leave-active-class="transition">
    <div v-if="mobileOpen" class="fixed inset-0 z-50 bg-black/40 lg:hidden" @click="mobileOpen = false" />
  </Transition>
  <Transition enter-from-class="-translate-x-full" leave-to-class="-translate-x-full" enter-active-class="transition duration-300" leave-active-class="transition duration-200">
    <aside v-if="mobileOpen" class="fixed inset-y-0 left-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl lg:hidden" aria-label="Menu">
      <div class="flex items-center justify-between border-b border-ink/10 px-4 py-4">
        <span class="font-display text-xl font-semibold">Trendbell</span>
        <button class="rounded-full p-2 hover:bg-sand" aria-label="Close menu" @click="mobileOpen = false">
          <Icon name="close" class="h-6 w-6" />
        </button>
      </div>
      <div class="flex-1 overflow-y-auto px-4 py-4">
        <details v-for="d in departments" :key="d.slug" class="group border-b border-ink/10 py-2" :open="d.slug === 'hijab'">
          <summary class="flex cursor-pointer list-none items-center justify-between py-2 text-base font-semibold">
            {{ d.name }}
            <Icon name="chevronDown" class="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <div class="grid grid-cols-2 gap-2 pb-3 pt-1">
            <RouterLink
              v-for="c in categoriesFor(d.slug)"
              :key="c.slug"
              :to="{ name: 'shop', query: { dept: d.slug, cat: c.slug } }"
              class="flex items-center gap-2 rounded-xl bg-cream p-2 text-sm font-medium"
            >
              <img :src="c.image" alt="" class="h-9 w-9 rounded-lg object-cover" loading="lazy" @error="onImgError" />
              {{ c.name }}
            </RouterLink>
            <RouterLink :to="{ name: 'shop', query: { dept: d.slug } }" class="col-span-2 py-1 text-sm font-semibold text-wine">
              Shop all {{ d.name }} →
            </RouterLink>
          </div>
        </details>
        <RouterLink :to="{ name: 'shop', query: { sort: 'new' } }" class="block border-b border-ink/10 py-4 font-semibold">New In</RouterLink>
        <RouterLink :to="{ name: 'shop', query: { sale: '1' } }" class="block border-b border-ink/10 py-4 font-semibold text-wine">Sale</RouterLink>
        <RouterLink to="/wishlist" class="block border-b border-ink/10 py-4 font-semibold">Wishlist ({{ shop.wishlist.length }})</RouterLink>
        <RouterLink to="/about" class="block py-4 font-semibold">About Us</RouterLink>
      </div>
    </aside>
  </Transition>
</template>
