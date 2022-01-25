import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/leadership',
    name: 'Leadership',
    component: () => import('../views/Leadership.vue')
  },
  {
    path: '/training',
    name: 'Training tests',
    component: () => import('../views/Training.vue')
  },
  {
    path: '/result',
    name: 'Test results',
    component: () => import('../views/Result.vue')
  },
  {
    path: '/contact',
    name: 'Contacts',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/forschool',
    name: 'For school',
    component: () => import('../views/Forschool.vue')
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('../views/Graph.vue')
  },
  {
    path: '/system',
    name: 'Systems Kyrgyztest',
    component: () => import('../views/System.vue')
  },
  {
    path: '/ads',
    name: 'Adsvertising',
    component: () => import('../views/Ads.vue')
  },
  {
    path: '/normative',
    name: 'Normative act',
    component: () => import('../views/Normative.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
