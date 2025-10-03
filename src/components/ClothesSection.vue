<template>
  <section class="px-4 sm:px-6 lg:px-8 py-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2
            class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
          >
            Latest Collection
          </h2>
          <p class="mt-2 text-gray-500">
            Discover our curated selection of outfits.
          </p>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in items"
          :key="item.id"
          class="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white"
        >
          <div class="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.name"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
            <div
              v-else
              class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-gray-400"
            >
              <span class="text-sm">No Image</span>
            </div>
            <div
              class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
          </div>

          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
            <p class="mt-1 text-sm text-gray-500 line-clamp-2">
              {{ item.description }}
            </p>

            <div class="mt-4 flex items-center justify-between">
              <p class="text-xl font-bold text-gray-900">
                {{ formatPrice(item.price) }}
              </p>
              <div class="flex items-center gap-2">
                <a
                  v-if="whatsAppNumber"
                  :href="waLink(item)"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                >
                  Order on WhatsApp
                </a>
                <button
                  v-else
                  @click="$emit('order', item)"
                  class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

// Props: allow parent to pass products and a WhatsApp number
const props = defineProps({
  products: {
    type: Array,
    default: () => [
      {
        id: "dress-001",
        name: "Embroidered Chiffon Set",
        description:
          "Elegant 3-piece chiffon outfit with hand embellishments and premium stitching.",
        price: 14500,
        image: null,
      },
      {
        id: "dress-002",
        name: "Velvet Festive Suit",
        description:
          "Rich velvet 2-piece set, perfect for formal evenings and occasions.",
        price: 17900,
        image: null,
      },
      {
        id: "dress-003",
        name: "Silk Classic Kurta",
        description:
          "Classic silk kurta with minimal embroidery – timeless and versatile.",
        price: 9900,
        image: null,
      },
    ],
  },
  currency: {
    type: String,
    default: "PKR",
  },
  whatsAppNumber: {
    // e.g., '923001234567' without +
    type: String,
    default: "",
  },
});

const items = computed(() => props.products);

function formatPrice(value) {
  try {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: props.currency,
    }).format(value);
  } catch (e) {
    return `${props.currency} ${value}`;
  }
}

function waLink(item) {
  const text = encodeURIComponent(
    `Hello, I would like to order:\n- Product: ${item.name}\n- ID: ${
      item.id
    }\n- Price: ${formatPrice(item.price)}\nPlease share the ordering process.`
  );
  return `https://wa.me/${props.whatsAppNumber}?text=${text}`;
}
</script>

<style scoped>
/***** line-clamp utility if Tailwind line-clamp plugin not present *****/
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2; /* Standard property for newer browsers */
  overflow: hidden;
}

a {
  pointer-events: auto;
}

a:hover{
  color: #fff !important;
}
</style>
