import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Shop = () => import('../views/Shop.vue')
const Product = () => import('../views/Product.vue')
const Wishlist = () => import('../views/Wishlist.vue')
const About = () => import('../views/About.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/shop', name: 'shop', component: Shop },
  { path: '/product/:id', name: 'product', component: Product },
  { path: '/wishlist', name: 'wishlist', component: Wishlist },
  { path: '/about', name: 'about', component: About },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    // Keep scroll position while only the shop filters change
    if (to.name === 'shop' && from.name === 'shop') return false
    return { top: 0 }
  },
})

router.afterEach((to) => {
  // Product pages set their own title
  if (to.name !== 'product') document.title = 'Trendbell — Women, Men & Modest Fashion'
})

export default router
