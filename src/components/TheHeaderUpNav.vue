<template>
  <div class="top-0 flex justify-between px-9 items-center w-full bg-gray-900 text-gray-200">
    <ul class="flex justify-around font-semibold py-2 ">
      <li
        class="mr-5"
        v-for="(navup, index) in navups"
        :key="index">
        <router-link :to="navup.to">
          {{navup.title}}
        </router-link>
      </li>
    </ul>
    <div class="flex">
      Пн-Пт. 9:00 - 17:30
    </div>
    <div class="">
      <TheToggleTheme />
    </div>
  </div>
</template>

<script lang="ts">
import NavUp from '@/models/ModelNavUp'
import TheToggleTheme from './TheToggleTheme.vue'
import { computed, defineComponent, onBeforeMount, onMounted, watch } from 'vue'
import { useStore } from '@/store'
import { ActionTypes } from '@/store/modules/action-types'

export default defineComponent({
  name: 'HeaderUpNav',
  components: {
    TheToggleTheme
  },
  setup() {
    const store = useStore()

    const navups = <NavUp[]>([
      {title: 'Нормативные акты', to: '/normative'},
      {title: 'Выпускникам школ', to: '/forschool'},
      {title: 'Система Кыргызтест', to: '/system'},
      {title: 'График проведения теста', to: '/graph'},
      {title: 'Тренировочные тесты', to: '/training'},
      {title: 'Объявления', to: '/ads'}
    ])

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