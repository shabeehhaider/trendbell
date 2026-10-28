<script setup>
import Icon from '../components/Icon.vue'
import { departments, WHATSAPP_NUMBER } from '@/data/catalog'
import { onImgError } from '@/store/shop'
</script>

<template>
  <div>
    <section class="bg-cream">
      <div class="container-x max-w-3xl py-16 text-center lg:py-24">
        <p class="eyebrow">Our story</p>
        <h1 class="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">Fashion for every family, every occasion.</h1>
        <p class="mt-6 text-lg leading-relaxed text-stone-600">
          Trendbell started with embroidered formals and grew into a home for the whole family — women’s pret and luxury wear, men’s kurta and suits,
          and a complete modest collection with abayas, chadars, Irani chadars, makna, kechar (hair catchers) and every small essential in between.
        </p>
      </div>
    </section>

    <section class="container-x grid gap-6 py-16 md:grid-cols-3">
      <RouterLink
        v-for="d in departments"
        :key="d.slug"
        :to="{ name: 'shop', query: { dept: d.slug } }"
        class="group overflow-hidden rounded-3xl border border-ink/10"
      >
        <img :src="d.image" :alt="d.name" class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" @error="onImgError" />
        <div class="p-6">
          <h2 class="font-display text-2xl font-semibold">{{ d.name }}</h2>
          <p class="mt-1 text-sm text-stone-600">{{ d.tagline }}</p>
        </div>
      </RouterLink>
    </section>

    <section class="container-x">
      <div class="flex flex-col items-center gap-5 rounded-3xl bg-ink px-6 py-14 text-center text-white">
        <h2 class="font-display text-3xl font-semibold">Questions? We’re a message away.</h2>
        <a :href="`https://wa.me/${WHATSAPP_NUMBER}`" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
          <Icon name="whatsapp" class="h-5 w-5" /> Chat on WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>
