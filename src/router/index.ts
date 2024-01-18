// import { Locales } from '@/locales/locales';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useStore } from "@/store";
import { MutationTypes } from '@/store/modules/mutation-types';
// import { i18n } from '@/main';
const store = useStore();
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {layout: 'AppLayoutMainPage'},
    // beforeEnter(to, from, next) {
    //   next(store.state.lang)
    //   const lang: any = to.params.Locales;
    //   console.log('to -> '+to.params)
    //   const navLocales = Object.values(Locales)
    //   if (navLocales.includes(lang)) {
    //     store.commit(MutationTypes.SET_LANG, lang); // Изменяем язык в хранилище Vuex
    //     //i18n.global.locale.value = lang; // Изменяем язык в I18n
    //     next();
    //   } else {
    //     next('/kg'); // Перенаправляем на язык по умолчанию, если передан некорректный языковой код
    //   }
    // }
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
    path: '/сourses',
    name: 'Courses',
    component: () => import('../views/Courses.vue'),
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
  {
    path: '/profile/',
    name: 'Profile',
    component: () => import('../views/Profile/Profile.vue'),
    meta: {layout: 'AppLayoutProfile'},
    redirect: '/home',
    children: [
      {
        path: '',
        name: 'ProfileHome',
        component: () => import('../views/Profile/Profile_Home.vue'),
      },
      {
        path: 'account',
        name: 'ProfileAccount',
        component: () => import('../views/Profile/Profile_Account.vue'),
      },
      {
        path: 'password',
        name: 'ProfileChangePassword',
        component: () => import('../views/Profile/Profile_ChangePassword.vue'),
      },
      {
        path: 'bookmarks',
        name: 'ProfileBookmarks',
        component: () => import('../views/Profile/Profile_Bookmarks.vue'),
      },
      {
        path: 'payment-method',
        name: 'ProfilePaymentMethod',
        component: () => import('../views/Profile/Profile_PaymentMethod.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
