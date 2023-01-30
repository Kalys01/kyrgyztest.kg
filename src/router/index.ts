import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {layout: 'AppLayoutMainPage'}
  },
  {
    path: '/news',
    name: 'News',
    alias: '/news',
    component: () => import('../views/News.vue'),
    meta: {layout: 'AppLayoutNews'}
  },
  {
    path: '/news/:id',
    name: 'FullNews',
    component: () => import('../views/FullNews.vue'),
    meta: {layout: 'AppLayoutInfo'}
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
    meta: {layout: 'AppLayoutInfo'}
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
    meta: {layout: 'AppLayoutInfo'}
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('../views/Graph.vue'),
    meta: {layout: 'AppLayoutInfo'}
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
    meta: {layout: 'AppLayoutInfo'}
  },
  {
    path: '/normative',
    name: 'Normative act',
    component: () => import('../views/Normative.vue'),
    meta: {layout: 'AppLayoutInfo'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
