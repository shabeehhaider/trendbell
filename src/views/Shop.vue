<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import Icon from '../components/Icon.vue'
import { departments, categories, products, getDepartment, getCategory, categoriesFor } from '@/data/catalog'
import { formatPrice, onImgError } from '@/store/shop'

const route = useRoute()
const router = useRouter()

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'new', label: 'New arrivals' },
  { value: 'popular', label: 'Bestsellers' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
]

const priceRanges = [
  { value: '0-1500', label: `Under ${formatPrice(1500)}` },
  { value: '1500-5000', label: `${formatPrice(1500)} – ${formatPrice(5000)}` },
  { value: '5000-10000', label: `${formatPrice(5000)} – ${formatPrice(10000)}` },
  { value: '10000-', label: `Over ${formatPrice(10000)}` },
]

// Filter state lives in the URL query
const dept = computed(() => route.query.dept || '')
const cat = computed(() => route.query.cat || '')
const q = computed(() => (route.query.q || '').toString())
const sort = computed(() => route.query.sort || 'featured')
const price = computed(() => route.query.price || '')
const sale = computed(() => route.query.sale === '1')

function setQuery(patch) {
  const next = { ...route.query, ...patch }
  Object.keys(next).forEach((k) => (next[k] === '' || next[k] == null) && delete next[k])
  router.replace({ query: next })
}

function selectDept(slug) {
  setQuery({ dept: dept.value === slug ? '' : slug, cat: '' })
}
function selectCat(c) {
  setQuery({ cat: cat.value === c.slug ? '' : c.slug, dept: c.department })
}

const searchText = ref(q.value)
watch(q, (v) => (searchText.value = v))
let searchTimer
watch(searchText, (v) => {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => v !== q.value && setQuery({ q: v.trim() }), 250)
})

const visibleCategories = computed(() => (dept.value ? categoriesFor(dept.value) : categories))

const results = computed(() => {
  const term = q.value.trim().toLowerCase()
  const [min, max] = price.value ? price.value.split('-').map((n) => (n ? Number(n) : null)) : [null, null]

  let list = products.filter((p) => {
    if (dept.value && p.department !== dept.value) return false
    if (cat.value && p.category !== cat.value) return false
    if (sale.value && !p.compareAt) return false
    if (min != null && p.price < min) return false
    if (max != null && p.price >= max) return false
    if (term) {
      const hay = `${p.name} ${p.description} ${getCategory(p.category)?.name} ${getDepartment(p.department)?.name}`.toLowerCase()
      if (!term.split(/\s+/).every((w) => hay.includes(w))) return false
    }
    return true
  })

  const rank = (p, badge) => (p.badge === badge ? 0 : 1)
  if (sort.value === 'new') list = [...list].sort((a, b) => rank(a, 'New') - rank(b, 'New'))
  if (sort.value === 'popular') list = [...list].sort((a, b) => rank(a, 'Bestseller') - rank(b, 'Bestseller'))
  if (sort.value === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
  if (sort.value === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
  return list
})

const heading = computed(() => {
  if (sale.value) return 'Sale'
  if (cat.value) return getCategory(cat.value)?.name || 'Shop'
  if (dept.value) return getDepartment(dept.value)?.name || 'Shop'
  if (q.value) return `Results for “${q.value}”`
  return 'Shop all'
})
const subheading = computed(() =>
  dept.value && !cat.value ? getDepartment(dept.value)?.tagline : 'Find your next favourite piece.'
)

const activeFilters = computed(() => {
  const chips = []
  if (dept.value) chips.push({ label: getDepartment(dept.value)?.name, clear: { dept: '', cat: '' } })
  if (cat.value) chips.push({ label: getCategory(cat.value)?.name, clear: { cat: '' } })
  if (price.value) chips.push({ label: priceRanges.find((r) => r.value === price.value)?.label, clear: { price: '' } })
  if (sale.value) chips.push({ label: 'On sale', clear: { sale: '' } })
  if (q.value) chips.push({ label: `“${q.value}”`, clear: { q: '' } })
  return chips
})

const filtersOpen = ref(false)
watch(filtersOpen, (open) => (document.body.style.overflow = open ? 'hidden' : ''))
onBeforeUnmount(() => (document.body.style.overflow = ''))
</script>

<template>
  <div>
    <!-- Page header -->
    <section class="bg-cream">
      <div class="container-x py-8 sm:py-10 lg:py-14">
        <nav class="mb-3 flex items-center gap-2 text-xs text-stone-500" aria-label="Breadcrumb">
          <RouterLink to="/" class="hover:text-ink">Home</RouterLink>
          <span>/</span>
          <RouterLink :to="{ name: 'shop' }" class="hover:text-ink">Shop</RouterLink>
          <template v-if="dept">
            <span>/</span>
            <RouterLink :to="{ name: 'shop', query: { dept } }" class="hover:text-ink">{{ getDepartment(dept)?.name }}</RouterLink>
          </template>
          <template v-if="cat">
            <span>/</span><span class="text-ink">{{ getCategory(cat)?.name }}</span>
          </template>
        </nav>
        <h1 class="font-display text-3xl font-semibold sm:text-5xl">{{ heading }}</h1>
        <p class="mt-2 text-stone-600">{{ subheading }}</p>

        <!-- Category pills -->
        <div class="no-scrollbar -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:gap-3 sm:px-0 lg:flex-wrap lg:overflow-visible">
          <button
            v-for="c in visibleCategories"
            :key="c.slug"
            class="flex shrink-0 items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-medium transition"
            :class="cat === c.slug ? 'border-ink bg-ink text-white' : 'border-ink/10 bg-white hover:border-ink/40'"
            @click="selectCat(c)"
          >
            <img :src="c.image" alt="" class="h-8 w-8 rounded-full object-cover" loading="lazy" @error="onImgError" />
            {{ c.name }}
          </button>
        </div>
      </div>
    </section>

    <div class="container-x grid gap-10 py-8 sm:py-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
      <!-- Filters (sidebar on desktop, drawer on mobile) -->
      <div
        v-if="filtersOpen"
        class="fixed inset-0 z-50 bg-black/40 lg:hidden"
        @click="filtersOpen = false"
      />
      <aside
        class="fixed inset-y-0 left-0 z-50 w-80 max-w-[85%] overflow-y-auto bg-white p-6 shadow-2xl transition-[transform,visibility] duration-300 lg:static lg:z-auto lg:w-auto lg:max-w-none lg:translate-x-0 lg:overflow-visible lg:p-0 lg:shadow-none"
        :class="filtersOpen ? 'visible translate-x-0' : 'invisible -translate-x-full lg:visible'"
        aria-label="Filters"
      >
        <div class="mb-6 flex items-center justify-between lg:hidden">
          <h2 class="font-display text-xl font-semibold">Filters</h2>
          <button class="rounded-full p-2 hover:bg-sand" aria-label="Close filters" @click="filtersOpen = false">
            <Icon name="close" class="h-6 w-6" />
          </button>
        </div>

        <div class="space-y-8 lg:sticky lg:top-32">
          <div>
            <label for="shop-search" class="text-xs font-semibold uppercase tracking-wider text-stone-500">Search</label>
            <div class="mt-3 flex items-center gap-2 rounded-full border border-ink/15 px-4 focus-within:border-ink">
              <Icon name="search" class="h-4 w-4 text-stone-400" />
              <input id="shop-search" v-model="searchText" type="search" placeholder="Search products" class="w-full bg-transparent py-2.5 text-sm outline-none" />
            </div>
          </div>

          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-500">Department</h3>
            <ul class="mt-3 space-y-1">
              <li v-for="d in departments" :key="d.slug">
                <button
                  class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition"
                  :class="dept === d.slug ? 'bg-ink font-semibold text-white' : 'hover:bg-sand'"
                  @click="selectDept(d.slug)"
                >
                  {{ d.name }}
                  <span class="text-xs opacity-60">{{ products.filter((p) => p.department === d.slug).length }}</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-500">Price</h3>
            <ul class="mt-3 space-y-1">
              <li v-for="r in priceRanges" :key="r.value">
                <label class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-sand">
                  <input
                    type="radio"
                    name="price"
                    class="h-4 w-4 accent-wine"
                    :checked="price === r.value"
                    @click="setQuery({ price: price === r.value ? '' : r.value })"
                  />
                  {{ r.label }}
                </label>
              </li>
            </ul>
          </div>

          <label class="flex cursor-pointer items-center justify-between rounded-xl bg-wine-light px-4 py-3 text-sm font-semibold text-wine">
            On sale only
            <input type="checkbox" class="h-4 w-4 accent-wine" :checked="sale" @change="setQuery({ sale: $event.target.checked ? '1' : '' })" />
          </label>

          <button v-if="activeFilters.length" class="text-sm font-semibold underline underline-offset-4" @click="router.replace({ query: {} })">
            Clear all filters
          </button>

          <button class="btn-primary w-full lg:hidden" @click="filtersOpen = false">
            Show {{ results.length }} {{ results.length === 1 ? 'product' : 'products' }}
          </button>
        </div>
      </aside>

      <!-- Results -->
      <section>
        <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <button class="btn-outline !px-4 !py-2 lg:hidden" @click="filtersOpen = true">
              <Icon name="filter" class="h-4 w-4" /> Filters
              <span v-if="activeFilters.length" class="grid h-5 w-5 place-items-center rounded-full bg-wine text-[10px] text-white">{{ activeFilters.length }}</span>
            </button>
            <p class="text-sm text-stone-500">{{ results.length }} {{ results.length === 1 ? 'product' : 'products' }}</p>
          </div>
          <label class="flex items-center gap-2 text-sm">
            <span class="hidden text-stone-500 sm:inline">Sort by</span>
            <select
              :value="sort"
              class="rounded-full border border-ink/15 bg-white py-2 pl-4 pr-8 text-sm font-medium outline-none focus:border-ink"
              @change="setQuery({ sort: $event.target.value === 'featured' ? '' : $event.target.value })"
            >
              <option v-for="o in sortOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
            </select>
          </label>
        </div>

        <div v-if="activeFilters.length" class="mb-6 flex flex-wrap gap-2">
          <button
            v-for="f in activeFilters"
            :key="f.label"
            class="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1.5 text-xs font-medium hover:bg-stone-200"
            @click="setQuery(f.clear)"
          >
            {{ f.label }} <Icon name="close" class="h-3.5 w-3.5" />
          </button>
        </div>

        <div v-if="results.length" class="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:grid-cols-3 lg:gap-x-6">
          <ProductCard v-for="p in results" :key="p.id" :product="p" />
        </div>
        <div v-else class="flex flex-col items-center gap-4 rounded-3xl bg-cream px-6 py-20 text-center">
          <Icon name="search" class="h-10 w-10 text-stone-400" />
          <p class="font-display text-2xl">No products match your filters</p>
          <p class="text-sm text-stone-500">Try a different search or remove a filter.</p>
          <button class="btn-primary" @click="router.replace({ query: {} })">Clear filters</button>
        </div>
      </section>
    </div>
  </div>
</template>
