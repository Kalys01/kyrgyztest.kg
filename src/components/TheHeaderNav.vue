<template>
  <nav class="bg-[#673AB7] text-gray-900 sticky top-0 hidden xs:block">
    <div class="max-w-7xl mx-auto md:px-3 lg:px-8">
      <div class="relative flex items-center justify-between text-sm font-medium h-16">

        <div class="flex items-center justify-between w-full lg:justify-start">
          <div class="flex text-gray-300 items-center ml-2 md:mx-3 lg:mx-0">
            <div class="mr-2 sm:mr-5">
              LOGO
            </div>
            <div class="hidden sm:flex">
              <h1 class="uppercase text-md cursor-pointer md:text-xl">Кыргызтест</h1>
            </div>
          </div>
          <div class="flex text-xs md:ml-6 md:text-sm xl:text-md">
            <ul class="flex items-center">
              <li
                v-for="(nav, index) in navs"
                :key="index"
              >
                <router-link
                  class="text-gray-300 px-2 py-2 rounded-sm cursor-pointer hover:border-b-2 hover:border-white md:px-3"
                  :to="nav.to"
                >
                  {{nav.title}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

          <!-- Language change -->
        <div class="hidden lg:flex items-center absolute inset-y-0 right-0 pr-2">
          <MultiLanguage />
        </div>
      </div>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu state. -->
    <!-- <TheMobileSidebar /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheMobileSidebar from './TheMobileSidebar.vue'
import Nav from '@/models/ModelNav'
import MultiLanguage from './MultiLanguage.vue'

export default defineComponent({
  components: {
    TheMobileSidebar,
    MultiLanguage,
  },
  setup() {
    const navs = <Nav[]>([
      {title: 'Главная', to: '/'},
      {title: 'Новости', to: '/news'},
      {title: 'Руководство', to: '/leadership'},
      {title: 'Результаты тестов', to: '/result'},
      {title: 'Контакты', to: '/contact'},
      
    ])

    return { navs }
  },
})
</script>
