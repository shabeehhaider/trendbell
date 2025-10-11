<template>
  <section class="px-4 sm:px-6 lg:px-8 py-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-center">
        <div class="flex items-center justify-between gap-4">
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
      </div>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in items"
          :key="item.id"
          @click="openModal(item)"
          class="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white cursor-pointer"
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
                  @click.stop
                  class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                >
                  Order on WhatsApp
                </a>
                <button
                  v-else
                  @click.stop="handleOrder(item)"
                  class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- ✨ Elegant Modal for Product Details -->
      <Transition name="modal">
        <div
          v-if="selectedItem"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <div class="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl max-h-[95vh] overflow-hidden">
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors group"
            >
              <svg class="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Modal Content -->
            <div class="overflow-y-auto max-h-[95vh]">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <!-- Left Side: Images Gallery -->
                <div class="bg-gray-50 p-6 lg:p-8">
                  <!-- Main Image -->
                  <div class="relative h-96 bg-white rounded-xl overflow-hidden shadow-md mb-4">
                    <img
                      v-if="currentImage"
                      :src="currentImage"
                      :alt="selectedItem.name"
                      class="w-full h-full object-cover"
                    />
                    <div
                      v-else
                      class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center"
                    >
                      <span class="text-gray-400">No Image</span>
                    </div>
                  </div>

                  <!-- Thumbnail Gallery (if additional images exist) -->
                  <div v-if="selectedItem.images && selectedItem.images.length > 0" class="grid grid-cols-3 gap-3">
                    <div
                      v-for="(img, index) in selectedItem.images"
                      :key="index"
                      class="relative h-32 bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      :class="{ 'ring-2 ring-emerald-500': currentImage === img }"
                      @click="changeMainImage(img)"
                    >
                      <img
                        :src="img"
                        :alt="`${selectedItem.name} - variation ${index + 1}`"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <!-- Placeholder thumbnails if no additional images -->
                  <div v-else class="grid grid-cols-3 gap-3">
                    <div class="relative h-32 bg-white rounded-lg overflow-hidden shadow-sm">
                      <img
                        v-if="selectedItem.image"
                        :src="selectedItem.image"
                        :alt="selectedItem.name"
                        class="w-full h-full object-cover opacity-50"
                      />
                    </div>
                    <div class="relative h-32 bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                      <span class="text-gray-400 text-xs">More views</span>
                    </div>
                    <div class="relative h-32 bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                      <span class="text-gray-400 text-xs">Coming soon</span>
                    </div>
                  </div>
                </div>

                <!-- Right Side: Content -->
                <div class="p-6 lg:p-8 flex flex-col">
                  <h3 class="text-2xl sm:text-3xl font-bold text-gray-900">{{ selectedItem.name }}</h3>
                  <p class="mt-3 text-xl font-semibold text-emerald-600">{{ formatPrice(selectedItem.price) }}</p>
                  
                  <div class="mt-6 space-y-6">
                    <div>
                      <p class="text-gray-700 leading-relaxed">{{ selectedItem.description }}</p>
                    </div>

                    <div v-if="selectedItem.details" class="pt-4 border-t border-gray-100">
                      <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Package Details</h4>
                      <p class="mt-2 text-gray-700">{{ selectedItem.details }}</p>
                    </div>

                    <div v-if="selectedItem.fullDescription" class="pt-4 border-t border-gray-100">
                      <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Full Description</h4>
                      <p class="mt-2 text-gray-700 leading-relaxed">{{ selectedItem.fullDescription }}</p>
                    </div>

                    <div v-if="selectedItem.materials" class="pt-4 border-t border-gray-100">
                      <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Materials</h4>
                      <p class="mt-2 text-gray-700">{{ selectedItem.materials }}</p>
                    </div>

                    <div v-if="selectedItem.careInstructions" class="pt-4 border-t border-gray-100">
                      <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Care Instructions</h4>
                      <p class="mt-2 text-gray-700">{{ selectedItem.careInstructions }}</p>
                    </div>
                  </div>

                  <!-- Action Button -->
                  <div class="mt-8 pt-6 border-t border-gray-100">
                    <a
                      v-if="whatsAppNumber"
                      :href="waLink(selectedItem)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white px-6 py-3.5 text-base font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Order on WhatsApp
                    </a>
                    <button
                      v-else
                      @click="handleOrder(selectedItem)"
                      class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-6 py-3.5 text-base font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

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
          "Classic silk kurta with minimal embroidery — timeless and versatile.",
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

// Define emits
const emit = defineEmits(['order']);

const items = computed(() => props.products);

// Modal state
const selectedItem = ref(null);
const currentImage = ref(null);

function openModal(item) {
  selectedItem.value = item;
  // Set initial image: prefer first image in images array, fallback to main image
  if (item.images && item.images.length > 0) {
    currentImage.value = item.images[0];
  } else {
    currentImage.value = item.image;
  }
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  selectedItem.value = null;
  currentImage.value = null;
  document.body.style.overflow = '';
}

function changeMainImage(img) {
  currentImage.value = img;
}

function handleOrder(item) {
  emit('order', item);
}

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
  line-clamp: 2;
  overflow: hidden;
}

a {
  pointer-events: auto;
}

a:hover {
  color: #fff !important;
}

/* Modal Transition Animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}
</style>