<script setup>
import VideoSlider from '../components/VideoSlider.vue'
import ClothesSection from '../components/ClothesSection.vue'

import dress1 from '@/assets/images/dress-1.jpeg'
import dress2 from '@/assets/images/dress-2.jpeg'
import dress3 from '@/assets/images/dress-3.jpeg'
import dress4 from '@/assets/images/dress-4.jpeg'
import dress5 from '@/assets/images/dress-5.jpeg'
import dress6 from '@/assets/images/dress-6.jpeg'
import dress7 from '@/assets/images/dress-7.jpeg'
import dress8 from '@/assets/images/dress-8.jpeg'

const products = [
  {
    id: 'dress-001',
    name: 'Sham-e-rungrez Crinkle chiffon',
    description: 'A soft mauve dress adorned with golden embroidery, sequins, and delicate cutdana work. The rich detailing adds sparkle and elegance, making it a perfect choice for weddings, festive gatherings, and evening occasions',
    price: 9900,
    image: dress1, 
  },
  {
    id: 'dress-002',
    name: 'Sham-e-rungrez Crinkle chiffon',
    description: 'A soft mauve dress adorned with golden embroidery, sequins, and delicate cutdana work. The rich detailing adds sparkle and elegance, making it a perfect choice for weddings, festive gatherings, and evening occasions',
    price: 9900,
    image: dress2, 
  },
  {
    id: 'dress-003',
    name: 'Sham-e-rungrez Crinkle chiffon',
    description: 'A soft mauve dress adorned with golden embroidery, sequins, and delicate cutdana work. The rich detailing adds sparkle and elegance, making it a perfect choice for weddings, festive gatherings, and evening occasions',
    price: 9900,
    image: dress3, 
  },
  {
    id: 'dress-004',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress4, 
  },
  {
    id: 'dress-005',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress5, 
  },
  {
    id: 'dress-006',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress6, 
  },
  {
    id: 'dress-007',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress7, 
  },
  {
    id: 'dress-008',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress8, 
  },
]

const whatsAppNumber = '923332404810' 
</script>

<template>
  <div>
    <VideoSlider />
    <ClothesSection :products="products" currency="PKR" :whatsAppNumber="whatsAppNumber" />
  </div>
</template>

<style scoped>
div {
  margin: 0;
  padding: 0;
}
</style>