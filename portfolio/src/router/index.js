import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('@/views/HomepageView.vue'),
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue'),
  },

  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: () => import('@/views/PortfolioView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
