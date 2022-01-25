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
    component: () => import('../views/News.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/leadership',
    name: 'Leadership',
    component: () => import('../views/Leadership.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/training',
    name: 'Training tests',
    component: () => import('../views/Training.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/result',
    name: 'Test results',
    component: () => import('../views/Result.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/contact',
    name: 'Contacts',
    component: () => import('../views/Contact.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/forschool',
    name: 'For school',
    component: () => import('../views/Forschool.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('../views/Graph.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/system',
    name: 'Systems Kyrgyztest',
    component: () => import('../views/System.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/ads',
    name: 'Adsvertising',
    component: () => import('../views/Ads.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/normative',
    name: 'Normative act',
    component: () => import('../views/Normative.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
