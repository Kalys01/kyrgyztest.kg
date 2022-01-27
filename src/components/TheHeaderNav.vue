<template>
  <nav class="bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="uppercase text-white text-2xl cursor-pointer">Кыргызтест</h1>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Главная</a>

              <ul class="flex items-center">
                <li>
                  <router-link
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    v-for="(nav, index) in navs" :key="index"
                    :to="nav.to"
                  >
                    {{nav.title}}
                  </router-link>
                </li>
              </ul>

              
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <!-- Language change -->
          <div class="ml-3 relative">
            <div>
              <div class="flex text-white">
                <span>кыр | рус</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <TheMobileSidebar />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheMobileSidebar from './TheMobileSidebar.vue'
import Nav from '@/models/ModelNav'

export default defineComponent({
  components: {
    TheMobileSidebar,
  },
  setup() {
    const navs = <Nav[]>([
      {title: 'Новости', to: '/news'},
      {title: 'Руководство', to: '/leadership'},
      {title: 'Тренировочные тесты', to: '/training'},
      {title: 'Результаты тестов', to: '/result'},
      {title: 'Контакты', to: '/contact'}
    ])

    return { navs }
  },
})
</script>
