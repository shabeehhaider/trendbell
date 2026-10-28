import { reactive, computed, watch } from 'vue'
import { CURRENCY, WHATSAPP_NUMBER, getProduct } from '@/data/catalog'

const STORAGE_KEY = 'trendbell:shop'

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && Array.isArray(saved.cart) && Array.isArray(saved.wishlist)) return saved
  } catch {}
  return { cart: [], wishlist: [] }
}

const saved = load()

export const shop = reactive({
  // cart lines: { id, qty, color }
  cart: saved.cart.filter((l) => getProduct(l.id)),
  wishlist: saved.wishlist.filter((id) => getProduct(id)),
  cartOpen: false,
  toast: '',
})

watch(
  () => ({ cart: shop.cart, wishlist: shop.wishlist }),
  (state) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  },
  { deep: true }
)

let toastTimer
function notify(message) {
  shop.toast = message
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (shop.toast = ''), 2200)
}

export const cartLines = computed(() =>
  shop.cart.map((line) => ({ ...line, product: getProduct(line.id) }))
)
export const cartCount = computed(() => shop.cart.reduce((n, l) => n + l.qty, 0))
export const cartTotal = computed(() =>
  cartLines.value.reduce((sum, l) => sum + l.product.price * l.qty, 0)
)

export function addToCart(product, { qty = 1, color = '', open = true } = {}) {
  const line = shop.cart.find((l) => l.id === product.id && l.color === color)
  if (line) line.qty += qty
  else shop.cart.push({ id: product.id, qty, color })
  if (open) shop.cartOpen = true
  else notify(`${product.name} added to bag`)
}

export function updateQty(index, qty) {
  if (qty <= 0) shop.cart.splice(index, 1)
  else shop.cart[index].qty = qty
}

export function isWished(id) {
  return shop.wishlist.includes(id)
}

export function toggleWishlist(product) {
  const i = shop.wishlist.indexOf(product.id)
  if (i >= 0) {
    shop.wishlist.splice(i, 1)
    notify('Removed from wishlist')
  } else {
    shop.wishlist.push(product.id)
    notify('Saved to wishlist')
  }
}

export function formatPrice(value) {
  try {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: CURRENCY,
      maximumFractionDigits: 0,
    }).format(value)
  } catch {
    return `${CURRENCY} ${value}`
  }
}

export function whatsAppProductLink(product, color = '') {
  const text = [
    'Hello Trendbell, I would like to order:',
    `- Product: ${product.name}`,
    `- ID: ${product.id}`,
    color ? `- Colour: ${color}` : '',
    `- Price: ${formatPrice(product.price)}`,
    'Please share the ordering process.',
  ]
    .filter(Boolean)
    .join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function whatsAppCartLink() {
  const lines = cartLines.value.map(
    (l, i) =>
      `${i + 1}. ${l.product.name} (${l.product.id})${l.color ? ` — ${l.color}` : ''} x${l.qty} = ${formatPrice(l.product.price * l.qty)}`
  )
  const text = [
    'Hello Trendbell, I would like to place this order:',
    ...lines,
    `Total: ${formatPrice(cartTotal.value)}`,
    'Please confirm availability and delivery details.',
  ].join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#efe9e1"/><text x="150" y="205" font-family="sans-serif" font-size="16" fill="#a8a29e" text-anchor="middle">Trendbell</text></svg>'
  )

export function onImgError(event) {
  if (event.target.src !== FALLBACK_IMG) event.target.src = FALLBACK_IMG
}
