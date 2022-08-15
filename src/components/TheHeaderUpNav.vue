<template>
  <div class="top-0 fixed lg:relative z-50 flex lg:justify-center justify-end items-center w-full py-1 lg:px-1 bg-gray-900 text-gray-300">
    <div class="flex justify-between w-full text-xs md:text-sm lg:justify-around lg:gap-4 xl:gap-16">
      <ul class="hidden lg:flex justify-around font-semibold py-2 text-xs xl:text-sm">
        <li
          class="xl:mx-3"
          v-for="(navup, index) in navups"
          :key="index">
          <router-link
            :to="navup.to"
            class="text-gray-300 px-3 py-2 rounded-sm hover:border-b-2 hover:border-white"
          >
            {{navup.title}}
          </router-link>
        </li>
      </ul>
      <div class="flex items-center mx-5 sm:mr-20 lg:hidden">
        <TheMobileButtonHumburger />
        <div class="mx-3 flex xs:hidden">
          LOGO
        </div>
      </div>
    
      <div class="hidden items-center 2xl:flex">
        Пн-Пт. 9:00 - 17:30
      </div>
      <div class="flex mx-5 lg:mx-0">
        <div class="lg:hidden flex items-center">
          <MultiLanguage />
        </div>
        <div class="flex items-center right-0 py-1">
          <TheToggleTheme />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavUp from '@/models/ModelNavUp'
import TheMobileButtonHumburger from './TheMobileButtonHumburger.vue'
import TheToggleTheme from './TheToggleTheme.vue'
import MultiLanguage from './MultiLanguage.vue'
import { computed, defineComponent, onBeforeMount, onMounted, watch } from 'vue'
import { useStore } from '@/store'
import { ActionTypes } from '@/store/modules/action-types'

export default defineComponent({
  name: 'HeaderUpNav',
  components: {
    TheToggleTheme,
    MultiLanguage,
    TheMobileButtonHumburger
  },
  setup() {
    const store = useStore()

    const navups = store.getters.GET_NAVUPS

    onBeforeMount: (() => store.dispatch(ActionTypes.INIT_THEME))

    const theme = computed(() => store.getters.GET_THEME)

    watch(theme, (newTheme, oldTheme) => {
      const addTheme = document.querySelector('body') as HTMLElement
      
      newTheme === 'light'
        ? addTheme.classList.remove('dark')
        : addTheme.classList.add('dark')
    })

    return { navups }
  },
})
</script>

<style lang="scss" scoped>

</style>