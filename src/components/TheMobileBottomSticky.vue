<template>
  <div class="w-full flex items-center h-16 z-50 fixed bottom-0 bg-black/50 rounded-t-md backdrop-filter backdrop-blur-lg shadow-xl">
    <ul class="w-full flex justify-around text-gray-400">

      <router-link to="/">
        <li class="flex flex-col justify-center items-center">
          <HomeIcon class="h-6 w-6"/>
          <span class="text-xs">Главная</span>
        </li>
      </router-link>

      <router-link to="/news">
        <li class="flex flex-col justify-center items-center">
          <NewspaperIcon class="w-6 h-6"/>
          <span class="text-xs">Новости</span>
        </li>
      </router-link>

      <router-link to="/leadership">
        <li class="flex flex-col justify-center items-center">
          <UserIcon class="h-6 w-6"/>
          <span class="text-xs">Руководство</span>
        </li>
      </router-link>

      <router-link to="/result">
        <li class="flex flex-col justify-center items-center">
          <CheckCircleIcon class="w-6 h-6"/>
          <span class="text-xs">Результаты</span>
        </li>
      </router-link>

      <router-link to="/contact">
        <li class="flex flex-col justify-center items-center">
          <IdentificationIcon class="h-6 w-6"/>
          <span class="text-xs">Контакты</span>
        </li>
      </router-link>

    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeIcon } from '@heroicons/vue/outline'
import { NewspaperIcon } from '@heroicons/vue/outline'
import { UserIcon } from '@heroicons/vue/outline'
import { IdentificationIcon } from '@heroicons/vue/outline'
import { CheckCircleIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: {
    UserIcon,
    HomeIcon,
    NewspaperIcon,
    CheckCircleIcon,
    IdentificationIcon
  },
  setup() {
      
  },
})
</script>
