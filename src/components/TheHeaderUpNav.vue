<template>
  <div class="top-0 flex justify-between px-9 items-center w-full bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900">
    <ul class="flex justify-around font-semibold py-2 ">
      <li
        class="mr-5"
        v-for="(navup, index) in navups"
        :key="index">
        <router-link :to="navup.to">{{navup.title}}</router-link>
      </li>
    </ul>
    <div class="flex">
      Пн-Пт. 9:00 - 17:30
    </div>
    <!-- <TheToggleTheme /> -->
    
  </div>
</template>

<script lang="ts">
import NavUp from '@/models/ModelNavUp'
// import TheToggleTheme from './TheToggleTheme.vue'
import { computed, defineComponent, onBeforeMount, onMounted, watch } from 'vue'
// import { useStore } from '@/store'
// import { ActionTypes } from '@/store/modules/action-types'
import { mapGetters } from 'vuex'

export default defineComponent({
  components: {
    // TheToggleTheme
  },
  setup() {
    // const store = useStore()

    const navups = <NavUp[]>([
      {title: 'Нормативные акты', to: '/normative'},
      {title: 'Выпускникам школ', to: '/forschool'},
      {title: 'Система Кыргызтест', to: '/system'},
      {title: 'График проведения теста', to: '/graph'},
      {title: 'Объявления', to: '/ads'}
    ])

    // onBeforeMount: (() => store.dispatch(ActionTypes.GET_THEME))
    // const theme = computed(() => store.getters.GET_THEME)

    return { navups }
  },
  
  // watch: {
  //   theme(newTheme) {
  //     const addTheme = document.querySelector('html') as HTMLElement
  //     newTheme === 'light'
  //       ? addTheme.classList.remove('dark')
  //       : addTheme.classList.add('dark')
  //   }
  // }
})
</script>

<style lang="scss" scoped>

</style>