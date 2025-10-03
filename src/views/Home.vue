<script setup>
import VideoSlider from '../components/VideoSlider.vue'
import ClothesSection from '../components/ClothesSection.vue'

// Import your product images
// Make sure the images are in your assets folder, e.g., src/assets/images/
import dress3 from '@/assets/images/dress-3.jpeg'
import dress4 from '@/assets/images/dress-4.jpeg'
import dress5 from '@/assets/images/dress-5.jpeg'
import dress6 from '@/assets/images/dress-6.jpeg'
import dress7 from '@/assets/images/dress-7.jpeg'
import dress8 from '@/assets/images/dress-8.jpeg'

// Replace with your real catalog and images
const products = [
  
  {
    id: 'dress-003',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress3, // Add the imported image here
  },
  {
    id: 'dress-004',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress4, // Add the imported image here
  },
  {
    id: 'dress-005',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress5, // Add the imported image here
  },
  {
    id: 'dress-006',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress6, // Add the imported image here
  },
  {
    id: 'dress-007',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress7, // Add the imported image here
  },
  {
    id: 'dress-008',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress8, // Add the imported image here
  },
]

// Optional: set your WhatsApp number (without +). Example: 923001234567
const whatsAppNumber = '923001234567' // Add your WhatsApp number here
</script>

<template>
  <div>
    <VideoSlider />
    <ClothesSection :products="products" currency="PKR" :whatsAppNumber="whatsAppNumber" />
  </div>
</template>

<style scoped>
/* Ensure no unwanted margins or padding */
div {
  margin: 0;
  padding: 0;
}
</style>