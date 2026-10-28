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

export const WHATSAPP_NUMBER = '923332404810'
export const CURRENCY = 'PKR'

// Placeholder photography from Unsplash — swap for real product shots later.
const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const departments = [
  {
    slug: 'women',
    name: 'Women',
    tagline: 'Luxury formals, everyday pret & seasonal layers',
    image: u('1667665970124-2273c6ef3489', 1200),
  },
  {
    slug: 'men',
    name: 'Men',
    tagline: 'Kurta shalwar, tailored suits & casual staples',
    image: u('1770359993283-a2c2f386584e', 1200),
  },
  {
    slug: 'hijab',
    name: 'Hijab & Modest',
    tagline: 'Abayas, chadars, shawls & every hijab essential',
    image: u('1762605135376-ae5af70a5628', 1200),
  },
]

export const categories = [
  // Women
  { slug: 'luxury-formals', name: 'Luxury Formals', department: 'women', image: dress3 },
  { slug: 'everyday-pret', name: 'Everyday Pret', department: 'women', image: u('1667665970118-f55705003914', 600) },
  { slug: 'women-outerwear', name: 'Coats & Blazers', department: 'women', image: u('1562347174-7370ad83dc47', 600) },
  // Men
  { slug: 'kurta-shalwar', name: 'Kurta Shalwar', department: 'men', image: u('1770359993283-a2c2f386584e', 600) },
  { slug: 'formal-suits', name: 'Formal Suits', department: 'men', image: u('1618886614638-80e3c103d31a', 600) },
  { slug: 'men-casual', name: 'Casual Wear', department: 'men', image: u('1552252059-9d77e4059ad1', 600) },
  { slug: 'men-shawls', name: 'Men Shawls', department: 'men', image: u('1785613229880-e7a40f285dba', 600) },
  // Hijab & modest essentials
  { slug: 'makna', name: 'Makna', department: 'hijab', image: u('1585728748176-455ac5eed962', 600), blurb: 'Pull-on, pin-free hijab' },
  { slug: 'chadar', name: 'Chadar', department: 'hijab', image: u('1618143708884-b093f5c2265a', 600), blurb: 'Full-length everyday cover' },
  { slug: 'shawl', name: 'Shawl', department: 'hijab', image: u('1759355346769-bc38a7c3e5e5', 600), blurb: 'Warm wraps & stoles' },
  { slug: 'abaya', name: 'Abaya', department: 'hijab', image: u('1772474500365-c2c520545f44', 600), blurb: 'Embellished & classic cuts' },
  { slug: 'kechar', name: 'Kechar', department: 'hijab', image: u('1744177762256-e2594b4894b6', 600), blurb: 'Hair catchers & claw clips' },
  { slug: 'safety-pins', name: 'Safety Pins', department: 'hijab', image: u('1571573412678-a643bbdff1af', 600), blurb: 'Snag-free hijab pins' },
  { slug: 'sleeves', name: 'Sleeves', department: 'hijab', image: u('1593111160232-b7112c81e7e3', 600), blurb: 'Stretch arm covers' },
  { slug: 'irani-chadar', name: 'Irani Chadar', department: 'hijab', image: u('1618143709023-d6ac7a0b4ec4', 600), blurb: 'Traditional crown-to-toe' },
  { slug: 'socks', name: 'Socks', department: 'hijab', image: u('1585499583264-491df5142e83', 600), blurb: 'Breathable modest socks' },
  { slug: 'scrunchie', name: 'Scrunchie', department: 'hijab', image: u('1788079961873-e1663ddf5ec0', 600), blurb: 'Volume scrunchies & ties' },
]

const dressCare =
  'Dry clean only. Store in a cool, dry place. Iron on low heat if needed. Keep away from direct sunlight to preserve color vibrancy.'

const womenFormals = [
  {
    id: 'dress-001',
    name: 'Sham-e-Rungrez Crinkle Chiffon',
    description:
      'A soft mauve dress adorned with golden embroidery, sequins, and delicate cutdana work — perfect for weddings, festive gatherings, and evening occasions.',
    price: 9900,
    images: [dress1, dress2, dress3],
    details: '3pc suit — embroidered chiffon shirt, dupatta, and trouser.',
    materials: 'Premium crinkle chiffon with golden zari embroidery, sequins, and cutdana work. Lining: polyester blend.',
    badge: 'Bestseller',
  },
  {
    id: 'dress-003',
    name: 'Noor-e-Mahal Blush',
    description:
      'Blush-pink net hand-embroidered with floral and leafy velvet motifs in golden zari, sequins, and beadwork, with a heavily embellished border.',
    price: 13500,
    images: [dress3, dress5, dress6],
    details: '4pc — 3gz frock fabric, 2.5gz embroidered dupatta, 3.5gz inner/trouser.',
    materials: 'Premium net with hand-embroidered velvet motifs, golden zari, sequins, and beadwork.',
    badge: 'New',
  },
  {
    id: 'dress-004',
    name: 'Silk Classic Kurta',
    description: 'Classic silk kurta with minimal embroidery — timeless and versatile.',
    price: 9900,
    images: [dress4, dress5, dress6],
    details: '2pc — silk kurta with matching trouser.',
    materials: '100% pure silk with minimal golden thread embroidery.',
  },
  {
    id: 'dress-005',
    name: 'Husn-e-Neela',
    description:
      'Ice-blue net adorned with vertical lines of shimmering crystals, sequins, and beads, finished with a pearl and stone border.',
    price: 11500,
    images: [dress5, dress4, dress7],
    details: '4pc — 3gz frock-style shirt, 2.5gz dupatta, inner & trouser.',
    materials: 'Luxury net with crystal, sequin, pearl and stone embellishment.',
    badge: 'New',
  },
  {
    id: 'dress-007',
    name: 'Noor-e-Mahal Ivory',
    description:
      'Soft net hand-embroidered with leafy velvet motifs in golden zari, sequins, and beadwork with a heavily embellished border.',
    price: 13500,
    images: [dress7, dress6, dress5],
    details: '4pc — 3gz frock fabric, 2.5gz dupatta, trouser & inner.',
    materials: 'Premium net with velvet appliqué and golden zari.',
  },
  {
    id: 'dress-008',
    name: 'Silk Signature Kurta',
    description: 'A clean-lined silk kurta with subtle golden detailing for formal and semi-formal events.',
    price: 9900,
    images: [dress8, dress1, dress2],
    details: '2pc — silk kurta with matching trouser.',
    materials: 'Premium silk with minimal golden thread work.',
  },
  {
    id: 'dress-009',
    name: 'Noor-e-Mahal Rose',
    description:
      'Blush-pink net with floral and velvet leafy motifs in golden zari, sequins, and beadwork — femininity meets luxury.',
    price: 10500,
    images: [dress9, dress8, dress1],
    details: '4pc — 2gz shirt, 2.5gz dupatta, inner & trouser.',
    materials: 'Net with velvet motifs and zari embroidery.',
  },
  {
    id: 'dress-010',
    name: 'Mushq',
    description:
      'Shimmering threadwork, delicate sequins, and intricate beads cascade in graceful vertical patterns for an ethereal silhouette.',
    price: 10500,
    images: [dress10, dress8, dress1],
    details: 'Lawa silk — 2gz shirt, 2.5gz dupatta, inner & trouser.',
    materials: 'Lawa silk with thread, sequin and bead embellishment.',
    badge: 'Bestseller',
  },
  {
    id: 'dress-011',
    name: 'Mehr-e-Sabz',
    description:
      'Sea-green lawa silk Anarkali with silver zari and floral thread embroidery, paired with a sheer scallop-edged dupatta.',
    price: 10500,
    images: [dress11, dress8, dress1],
    details: '4pc — 2gz shirt, 2.5gz dupatta, inner & trouser.',
    materials: 'Lawa silk with silver zari and thread embroidery.',
  },
].map((p) => ({ ...p, department: 'women', category: 'luxury-formals', careInstructions: dressCare }))

const COLOR_NAMES = {
  '#ffffff': 'White', '#111111': 'Black', '#f5f0e6': 'Ivory', '#c9b79c': 'Khaki', '#9b1c1c': 'Crimson',
  '#f4f1ea': 'Off-White', '#3b5b8c': 'Indigo', '#8a8a85': 'Stone Grey', '#5d6b3a': 'Olive', '#2b2b2b': 'Charcoal',
  '#1e2a44': 'Navy', '#8b5e3c': 'Tan', '#e7d8c9': 'Nude', '#9ec5e8': 'Sky Blue', '#f2c4ce': 'Blush',
  '#2e6da4': 'Ocean', '#b39ddb': 'Lilac', '#f2ede3': 'Sand', '#b3261e': 'Ruby', '#e8dcc6': 'Beige',
  '#d8c3a5': 'Camel', '#cbbba5': 'Taupe', '#5b3a6e': 'Plum', '#8fa88a': 'Sage',
}

// Compact factory for placeholder catalogue items
function item(id, department, category, name, price, imageIds, extra = {}) {
  return {
    id,
    department,
    category,
    name,
    price,
    images: imageIds.map((i) => u(i)),
    description: extra.description || `${name} from the Trendbell ${category.replace(/-/g, ' ')} edit.`,
    details: extra.details || '',
    materials: extra.materials || '',
    careInstructions: extra.care || 'Gentle hand wash in cold water. Do not bleach. Dry in shade and iron on low heat.',
    colors: (extra.colors || []).map((hex) => ({ hex, name: COLOR_NAMES[hex] || hex })),
    badge: extra.badge,
    compareAt: extra.compareAt,
  }
}

const otherProducts = [
  // Women
  item('w-pret-01', 'women', 'everyday-pret', 'Ivory Lawn Shirt Dress', 4200, ['1667665970124-2273c6ef3489', '1667665970118-f55705003914'], { badge: 'New', colors: ['#f5f0e6', '#c9b79c'], description: 'Breathable lawn shirt dress with a relaxed fit — your everyday go-to.' }),
  item('w-pret-02', 'women', 'everyday-pret', 'Riverside Printed Kurti', 3600, ['1667665970118-f55705003914', '1667665970124-2273c6ef3489'], { compareAt: 4500, badge: 'Sale', description: 'Lightweight printed kurti with side slits and a straight hem.' }),
  item('w-pret-03', 'women', 'everyday-pret', 'Noir Cotton Maxi', 5400, ['1668028554553-f83cac89ce0f'], { colors: ['#111111'], description: 'A fluid black cotton maxi that dresses up or down effortlessly.' }),
  item('w-out-01', 'women', 'women-outerwear', 'Crimson Wool-Blend Coat', 12900, ['1562347174-7370ad83dc47'], { badge: 'Bestseller', colors: ['#9b1c1c'], description: 'Tailored wool-blend coat with notch lapels for crisp winter days.' }),
  item('w-out-02', 'women', 'women-outerwear', 'Off-White Tailored Blazer', 8900, ['1571513722275-4b41940f54b8'], { colors: ['#f4f1ea'], description: 'Single-breasted blazer with soft structured shoulders.' }),

  // Men
  item('m-kurta-01', 'men', 'kurta-shalwar', 'Indigo Wash & Wear Kurta', 5900, ['1770359993283-a2c2f386584e'], { badge: 'Bestseller', colors: ['#3b5b8c'], details: '2pc — kurta & shalwar', description: 'Easy-care wash & wear kurta shalwar in a rich indigo tone.' }),
  item('m-kurta-02', 'men', 'kurta-shalwar', 'Stone Grey Tunic Set', 6400, ['1785613590746-f57d638c7d38'], { badge: 'New', colors: ['#8a8a85'], details: '2pc — kurta & trouser', description: 'Modern-cut tunic with a band collar and matching trouser.' }),
  item('m-kurta-03', 'men', 'kurta-shalwar', 'Olive Cotton Kurta', 4900, ['1727835523545-70ee992b5763'], { colors: ['#5d6b3a'], description: 'Soft cotton kurta in a muted olive for everyday comfort.' }),
  item('m-suit-01', 'men', 'formal-suits', 'Charcoal Two-Piece Suit', 24900, ['1618886614638-80e3c103d31a'], { badge: 'New', colors: ['#2b2b2b'], description: 'Slim-fit two-piece suit cut from a fine wool blend.' }),
  item('m-suit-02', 'men', 'formal-suits', 'Navy Business Suit', 22500, ['1667284152861-36e03571486a'], { compareAt: 26000, badge: 'Sale', colors: ['#1e2a44'], description: 'Classic navy suit for the boardroom and beyond.' }),
  item('m-cas-01', 'men', 'men-casual', 'Oxford Shirt & Denim Look', 6900, ['1552252059-9d77e4059ad1'], { description: 'Crisp white oxford shirt — pairs with any denim.' }),
  item('m-cas-02', 'men', 'men-casual', 'Suede Trucker Jacket', 14500, ['1776843370483-4f793bc14739'], { badge: 'Bestseller', colors: ['#8b5e3c'], description: 'Buttery suede trucker jacket with a relaxed fit.' }),
  item('m-cas-03', 'men', 'men-casual', 'Classic White Polo', 2900, ['1537261131936-3cdff36a1ac9'], { colors: ['#ffffff', '#111111'], description: 'Pique cotton polo with a ribbed collar.' }),
  item('m-shawl-01', 'men', 'men-shawls', 'Embroidered Black Shawl', 7800, ['1785613229880-e7a40f285dba', '1785613231335-37d800d79a67'], { badge: 'New', description: 'Warm black shawl with tonal hand-embroidered borders.' }),

  // Makna
  item('h-makna-01', 'hijab', 'makna', 'Jersey Makna — Pearl White', 1290, ['1585728748176-455ac5eed962'], { badge: 'Bestseller', colors: ['#ffffff', '#111111', '#e7d8c9'], description: 'Instant pull-on makna in soft stretch jersey. No pins needed.', materials: 'Cotton-spandex jersey' }),
  item('h-makna-02', 'hijab', 'makna', 'Chiffon Makna — Sky Blue', 1490, ['1542380841-5eef57349ca1'], { colors: ['#9ec5e8', '#f2c4ce'], description: 'Lightweight double-layer chiffon makna with a fitted underscarf.' }),
  item('h-makna-03', 'hijab', 'makna', 'Everyday Makna — Ocean', 1190, ['1581430420317-48eeec37e928'], { colors: ['#2e6da4'], description: 'Breathable everyday makna for school, college and work.' }),
  item('h-makna-04', 'hijab', 'makna', 'Lilac Viscose Makna', 1390, ['1693985007521-e08e64770947'], { badge: 'New', colors: ['#b39ddb'], description: 'Silky viscose makna with a soft, natural drape.' }),

  // Chadar
  item('h-chadar-01', 'hijab', 'chadar', 'Classic White Chadar', 2490, ['1618143708884-b093f5c2265a'], { badge: 'Bestseller', colors: ['#ffffff'], description: 'Full-length lightweight chadar for daily wear and prayer.' }),
  item('h-chadar-02', 'hijab', 'chadar', 'Desert Sand Chadar', 2690, ['1618143709144-4004ed79d915'], { colors: ['#f2ede3'], description: 'Generous-width chadar in a breathable cotton voile.' }),
  item('h-chadar-03', 'hijab', 'chadar', 'Prayer Chadar — Ivory', 2290, ['1618143708650-0352722cc30a'], { description: 'Easy one-piece prayer chadar with elasticated face opening.' }),

  // Shawl
  item('h-shawl-01', 'hijab', 'shawl', 'Floral Fringe Shawl', 3200, ['1759355346769-bc38a7c3e5e5'], { badge: 'New', description: 'Printed floral shawl with tasselled fringe edges.' }),
  item('h-shawl-02', 'hijab', 'shawl', 'Ombre Knit Lace Shawl', 3900, ['1760837992224-e73b2ba6f1c6'], { colors: ['#b3261e'], description: 'Hand-knitted lace shawl with a rich ombre finish.' }),
  item('h-shawl-03', 'hijab', 'shawl', 'Crochet Fringe Wrap', 3500, ['1434389677669-e08b4cac3105'], { colors: ['#e8dcc6'], description: 'Cosy crochet wrap in warm beige.' }),
  item('h-shawl-04', 'hijab', 'shawl', 'Pashmina-Feel Stole Set', 4800, ['1737988007411-e85aa733efa1', '1701308540437-e0a7e7666cbe'], { compareAt: 5800, badge: 'Sale', description: 'Ultra-soft stole available in a range of seasonal shades.' }),

  // Abaya
  item('h-abaya-01', 'hijab', 'abaya', 'Floral Lace-Cuff Abaya', 8900, ['1772474500365-c2c520545f44'], { badge: 'Bestseller', colors: ['#111111'], details: 'Abaya + matching hijab', description: 'Elegant black abaya with floral embellishments and lace cuffs.', materials: 'Nida fabric' }),
  item('h-abaya-02', 'hijab', 'abaya', 'Pearl Sleeve Abaya', 9500, ['1772474578035-bebcd90b355d'], { badge: 'New', colors: ['#111111'], description: 'Classic black abaya with pearl and bead embellished sleeves.' }),
  item('h-abaya-03', 'hijab', 'abaya', 'Beige Embroidered Abaya', 10500, ['1760083545495-b297b1690672'], { colors: ['#d8c3a5'], description: 'Flowing beige abaya with intricate tonal embroidery.' }),
  item('h-abaya-04', 'hijab', 'abaya', 'Silver Line Abaya', 8400, ['1772474521525-c022114367ce'], { description: 'Black abaya highlighted with fine silver embellishments.' }),
  item('h-abaya-05', 'hijab', 'abaya', 'Neutral Open-Front Abaya', 7600, ['1752794673269-dc356838c5fd'], { compareAt: 8900, badge: 'Sale', colors: ['#cbbba5'], description: 'Relaxed open-front abaya in a versatile neutral shade.' }),
  item('h-abaya-06', 'hijab', 'abaya', 'Navy Kimono Abaya', 7900, ['1762605135326-5c4bcc5ef006'], { colors: ['#1e2a44'], description: 'Kimono-sleeve navy abaya — layer it over any outfit.' }),

  // Kechar
  item('h-kechar-01', 'hijab', 'kechar', 'Gold Metal Hair Catcher', 650, ['1744177762256-e2594b4894b6', '1744177762258-c98418b7a4eb'], { badge: 'Bestseller', description: 'Strong-grip gold claw clip that keeps hair neatly in place under your hijab.', materials: 'Alloy metal with gold finish' }),
  item('h-kechar-02', 'hijab', 'kechar', 'Matte Black Claw Kechar', 450, ['1613405091285-2c3ece70ff2e'], { colors: ['#111111'], description: 'Large matte claw clip that holds thick hair all day without slipping.', materials: 'Durable acetate' }),
  item('h-kechar-03', 'hijab', 'kechar', 'Golden Floral Kechar', 750, ['1744177762306-6432f05fa7b1'], { badge: 'New', description: 'Decorative gold hair catcher with a floral design for a bun or half-up style.' }),
  item('h-kechar-04', 'hijab', 'kechar', 'Everyday Hair Catcher', 390, ['1680887645388-a77b2be653d3'], { description: 'Lightweight medium-size kechar for daily use at home, school or work.' }),
  item('h-kechar-05', 'hijab', 'kechar', 'Kechar & Scrunchie Gift Set', 1190, ['1774301844178-c9ce96b76d92'], { compareAt: 1490, badge: 'Sale', description: 'Assorted hair catchers with matching scrunchies, a ready-to-gift bundle.' }),

  // Safety pins
  item('h-pins-01', 'hijab', 'safety-pins', 'Hijab Safety Pins — 12 pcs', 350, ['1571573412678-a643bbdff1af'], { badge: 'Bestseller', description: 'Rust-free stainless steel pins that won\'t snag delicate fabric.' }),
  item('h-pins-02', 'hijab', 'safety-pins', 'Mini Pin Pack — 24 pcs', 450, ['1583078379333-e34d6569c406'], { description: 'Extra-small pins for chiffon and georgette hijabs.' }),
  item('h-pins-03', 'hijab', 'safety-pins', 'Pin & Brooch Combo', 650, ['1792232017927-32ca0bd6bd7c'], { badge: 'New', description: 'Assorted safety pins with a reusable storage card.' }),

  // Sleeves
  item('h-sleeves-01', 'hijab', 'sleeves', 'Stretch Arm Sleeves — Black', 550, ['1593111160232-b7112c81e7e3'], { badge: 'Bestseller', colors: ['#111111', '#ffffff', '#e7d8c9'], description: 'Full-length stretch sleeves for modest coverage under short sleeves.' }),
  item('h-sleeves-02', 'hijab', 'sleeves', 'Cotton Arm Sleeves — 2 Pack', 950, ['1613611864136-0ace2a3b9926'], { description: 'Breathable cotton arm covers, black and white pair.' }),

  // Irani chadar
  item('h-irani-01', 'hijab', 'irani-chadar', 'Irani Chadar — Ivory Lilac', 3400, ['1618143709023-d6ac7a0b4ec4'], { badge: 'New', description: 'Traditional Irani-style chadar with a fitted crown and long drape.' }),
  item('h-irani-02', 'hijab', 'irani-chadar', 'Irani Chadar — Classic Black', 3200, ['1610117688139-6cf7225fb50d'], { badge: 'Bestseller', colors: ['#111111'], description: 'Floor-length black Irani chadar in soft crepe.' }),
  item('h-irani-03', 'hijab', 'irani-chadar', 'Irani Chadar — Everyday', 2900, ['1729200688422-e4ffe8ac73a1'], { description: 'Lightweight Irani chadar for daily wear.' }),

  // Socks
  item('h-socks-01', 'hijab', 'socks', 'Cotton Socks — 3 Pack', 750, ['1585499583264-491df5142e83'], { badge: 'Bestseller', description: 'Soft, breathable everyday socks in assorted colours.' }),
  item('h-socks-02', 'hijab', 'socks', 'Sage Ribbed Socks', 450, ['1640026199235-c24aa417b552'], { colors: ['#8fa88a'], description: 'Ribbed crew socks in a calming sage green.' }),
  item('h-socks-03', 'hijab', 'socks', 'Navy & Black Socks Set', 690, ['1615486364462-ef6363adbc18'], { description: 'Opaque socks for modest wear with abayas and sandals.' }),
  item('h-socks-04', 'hijab', 'socks', 'Pastel Fun Socks', 490, ['1564379976409-79bd0786fff1'], { badge: 'New', description: 'Playful pastel socks with a cushioned sole.' }),

  // Scrunchie
  item('h-scrunchie-01', 'hijab', 'scrunchie', 'Gold Satin Volume Scrunchie', 450, ['1788079961873-e1663ddf5ec0'], { badge: 'Bestseller', description: 'Oversized volume scrunchie that adds lift under any hijab.' }),
  item('h-scrunchie-02', 'hijab', 'scrunchie', 'Crystal Satin Scrunchie', 550, ['1788079962459-dceba255d033'], { badge: 'New', description: 'White satin scrunchie with tiny crystal details.' }),
  item('h-scrunchie-03', 'hijab', 'scrunchie', 'Black Velvet Scrunchie', 490, ['1788079962246-69f95a30e3d5'], { description: 'Plush velvet scrunchie with rhinestone accents.' }),
  item('h-scrunchie-04', 'hijab', 'scrunchie', 'Satin Scrunchie Trio', 990, ['1777795530508-005312461d00'], { compareAt: 1350, badge: 'Sale', description: 'Three satin scrunchies in soft seasonal shades.' }),
]

export const products = [...womenFormals, ...otherProducts].map((p) => ({ colors: [], ...p, image: p.images[0] }))

export const getDepartment = (slug) => departments.find((d) => d.slug === slug)
export const getCategory = (slug) => categories.find((c) => c.slug === slug)
export const getProduct = (id) => products.find((p) => p.id === id)
export const categoriesFor = (dept) => categories.filter((c) => c.department === dept)
export const countIn = (slug) => products.filter((p) => p.category === slug).length
