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
import dress9 from '@/assets/images/dress-9.jpeg'
import dress10 from '@/assets/images/dress-10.jpeg'
import dress11 from '@/assets/images/dress-11.jpeg'

const products = [
  {
    id: 'dress-001',
    name: 'Sham-e-rungrez Crinkle chiffon',
    description:
      'A soft mauve dress adorned with golden embroidery, sequins, and delicate cutdana work. The rich detailing adds sparkle and elegance, making it a perfect choice for weddings, festive gatherings, and evening occasions',
    price: 9900,
    image: dress1,
    images: [dress1, dress2, dress3],
    details: '3pc suit — includes embroidered chiffon shirt, dupatta, and trouser.',
    fullDescription: 'This exquisite ensemble features a flowing chiffon fabric that drapes beautifully, creating an elegant silhouette. The intricate golden embroidery work includes traditional motifs, sequins, and cutdana detailing that catches the light beautifully. Perfect for special occasions where you want to make a lasting impression.',
    materials: 'Premium crinkle chiffon fabric with golden zari embroidery, sequins, and cutdana work. Lining: Polyester blend.',
    careInstructions: 'Dry clean only. Store in a cool, dry place. Iron on low heat if needed. Keep away from direct sunlight to preserve color vibrancy.'
  },
  {
    id: 'dress-002',
    name: 'Sham-e-rungrez Crinkle chiffon',
    description:
      'A soft mauve dress adorned with golden embroidery, sequins, and delicate cutdana work. The rich detailing adds sparkle and elegance, making it a perfect choice for weddings, festive gatherings, and evening occasions',
    price: 9900,
    image: dress2,
    images: [dress2, dress1, dress4],
    details: '3pc suit — includes embroidered chiffon shirt, dupatta, and trouser.',
    fullDescription: 'This stunning ensemble showcases the perfect blend of traditional craftsmanship and modern elegance. The soft mauve hue complements various skin tones, while the golden embellishments add a touch of luxury. The flowing silhouette ensures comfort while maintaining a sophisticated appearance.',
    materials: 'High-quality crinkle chiffon with hand-embroidered golden zari work, sequins, and cutdana detailing. Premium lining for comfort.',
    careInstructions: 'Professional dry cleaning recommended. Store hanging to maintain shape. Avoid direct sunlight and moisture. Iron on low heat with a pressing cloth.'
  },
  {
    id: 'dress-003',
    name: 'Noor e Mahal',
    description:
      'A soft blush-pink net fabric delicately hand-embroidered with floral and leafy velvet motifs in golden zari, sequins, and beadwork. With a heavily embellished border and beautifully embroidered dupatta, this piece blends femininity with luxury — perfect for weddings and festive occasions.',
    price: 13500,
    image: dress3,
    images: [dress3, dress5, dress6],
    details: '4pc — 3gz frock style fabric, 2.5gz embroidered dupatta, 3.5gz inner/trouser.',
    fullDescription: 'Noor e Mahal represents the pinnacle of traditional Pakistani craftsmanship. The delicate net fabric is transformed into a masterpiece through hours of meticulous hand embroidery. The floral and leafy motifs in velvet create a stunning three-dimensional effect, while the golden zari work adds royal elegance. This ensemble is perfect for brides, bridesmaids, or any special celebration where you want to be the center of attention.',
    materials: 'Premium net fabric with hand-embroidered velvet motifs, golden zari work, sequins, and beadwork. Inner lining in matching fabric.',
    careInstructions: 'Dry clean only by professionals experienced with embroidered garments. Store flat or hanging with proper support. Handle with care to avoid snagging the delicate net fabric.'
  },
  {
    id: 'dress-004',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress4,
    images: [dress4, dress5, dress6],
    details: '2pc — silk kurta with matching trouser.',
    fullDescription: 'This timeless silk kurta embodies understated elegance with its clean lines and minimal embellishments. The natural sheen of pure silk fabric creates a sophisticated look that works for both formal and semi-formal occasions. The classic cut ensures it remains fashionable for years to come.',
    materials: '100% pure silk fabric with minimal golden thread embroidery. Matching silk trouser with comfortable fit.',
    careInstructions: 'Dry clean only. Store in a breathable garment bag. Avoid folding to prevent creasing. Iron on low heat with a pressing cloth.'
  },
  {
    id: 'dress-005',
    name: 'Husn neela',
    description: 'A luxurious ice-blue net fabric heavily adorned with vertical lines of shimmering crystals, sequins, and beads with pearl and stones border making it perfect for bridal wear, evening gowns, or high-end couture',
    price: 11500,
    image: dress5,
    images: [dress5, dress4, dress7],
    details: '4pc 3 gz shirt frock style 2.5 gz dupatta Inner trouser included ',
    fullDescription: 'A perfect example of how simplicity can be the ultimate sophistication. This silk kurta features clean, modern lines with just enough detail to make it special. The luxurious silk fabric drapes beautifully and feels comfortable against the skin, making it ideal for long events.',
    materials: 'Premium silk fabric with subtle golden thread work. Matching silk trouser with modern cut.',
    careInstructions: 'Professional dry cleaning recommended. Store hanging to maintain shape. Keep away from perfumes and deodorants that may stain silk.'
  },
  {
    id: 'dress-006',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress6,
    images: [dress6, dress7, dress8],
    details: '2pc — silk kurta with matching trouser.',
    fullDescription: 'This elegant silk kurta showcases the beauty of traditional Pakistani craftsmanship in a contemporary design. The subtle embroidery work adds just the right amount of detail without overwhelming the natural beauty of the silk fabric. Perfect for those who appreciate quality and timeless style.',
    materials: 'High-grade silk with hand-embroidered details. Matching silk trouser with comfortable fit.',
    careInstructions: 'Dry clean only. Store in a cool, dry place. Avoid direct sunlight to prevent color fading. Iron on low heat.'
  },
  {
    id: 'dress-007',
    name: 'Noor e Mahal',
    description: 'A soft net fabric delicately hand-embroidered  leafy velvet motifs in golden zari, sequins, and beadwork With heavily embellished border Perfect for formal wear, weddings, and festive occasions, this piece blends femininity with luxury',
    price: 13500,
    image: dress7,
    images: [dress7, dress6, dress5],
    details: '4pc✨ 3gz frock fabric 2.5 gz dupatta Trouser inner included',
    fullDescription: 'Crafted with attention to detail, this silk kurta represents the perfect balance between tradition and modernity. The luxurious silk fabric ensures comfort and elegance, while the minimal embroidery adds a touch of sophistication. This piece will become a staple in your wardrobe for years to come.',
    materials: 'Pure silk fabric with delicate golden thread embroidery. Matching silk trouser with modern styling.',
    careInstructions: 'Dry clean only. Store hanging in a breathable garment bag. Handle with care to maintain the fabric\'s natural luster.'
  },
  {
    id: 'dress-008',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    image: dress8,
    images: [dress8, dress1, dress2],
    details: '2pc — silk kurta with matching trouser.',
    fullDescription: 'This sophisticated silk kurta embodies the essence of Pakistani fashion with its clean design and quality craftsmanship. The natural drape of silk creates a flattering silhouette, while the subtle embellishments add just enough detail to make it special. Perfect for formal occasions and special events.',
    materials: 'Premium silk fabric with minimal golden thread work. Matching silk trouser with comfortable cut.',
    careInstructions: 'Professional dry cleaning only. Store flat or hanging with proper support. Avoid contact with rough surfaces that may snag the delicate silk fabric.'
  },
  {
    id: 'dress-009',
    name: 'Noor e Mahal',
    description: 'A soft blush-pink net fabric delicately hand-embroidered with floral and velvet leafy motifs in golden zari, sequins, and beadwork With heavily embellished border Perfect for formal wear, weddings, and festive occasions, this piece blends femininity with luxury',
    price: 10500,
    image: dress9,
    images: [dress8, dress1, dress2],
    details: '4pc 2 gz shirt 2.5 gz dupatta Inner/trouser included',
    fullDescription: 'This sophisticated silk kurta embodies the essence of Pakistani fashion with its clean design and quality craftsmanship. The natural drape of silk creates a flattering silhouette, while the subtle embellishments add just enough detail to make it special. Perfect for formal occasions and special events.',
    materials: 'Premium silk fabric with minimal golden thread work. Matching silk trouser with comfortable cut.',
    careInstructions: 'Professional dry cleaning only. Store flat or hanging with proper support. Avoid contact with rough surfaces that may snag the delicate silk fabric.'
  },
  {
    id: 'dress-0010',
    name: 'Mushq',
    description: 'The shimmering threadwork, delicate sequins, and intricate bead details cascade in graceful vertical patterns, creating an ethereal silhouette',
    price: 10500,
    image: dress10,
    images: [dress8, dress1, dress2],
    details: 'Fabric lawa silk 2 gz shirt 2.5 gz dupatta Inner trouser included',
    fullDescription: 'This sophisticated silk kurta embodies the essence of Pakistani fashion with its clean design and quality craftsmanship. The natural drape of silk creates a flattering silhouette, while the subtle embellishments add just enough detail to make it special. Perfect for formal occasions and special events.',
    materials: 'Premium silk fabric with minimal golden thread work. Matching silk trouser with comfortable cut.',
    careInstructions: 'Professional dry cleaning only. Store flat or hanging with proper support. Avoid contact with rough surfaces that may snag the delicate silk fabric.'
  },
  {
    id: 'dress-0011',
    name: 'Mehr-e-sabz',
    description: 'Lawa silk fabric This enchanting sea-green Anarkali features intricate silver zari and thread embroidery with floral motifs spread gracefully across the fabric. Its sheer dupatta is edged with fine scalloped borders, enhancing the overall eleganance',
    price: 10500,
    image: dress11,
    images: [dress8, dress1, dress2],
    details: '4pc 2 gz shirt 2.5 gz dupatta Inner/trouser included',
    fullDescription: 'This sophisticated silk kurta embodies the essence of Pakistani fashion with its clean design and quality craftsmanship. The natural drape of silk creates a flattering silhouette, while the subtle embellishments add just enough detail to make it special. Perfect for formal occasions and special events.',
    materials: 'Premium silk fabric with minimal golden thread work. Matching silk trouser with comfortable cut.',
    careInstructions: 'Professional dry cleaning only. Store flat or hanging with proper support. Avoid contact with rough surfaces that may snag the delicate silk fabric.'
  }
];

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