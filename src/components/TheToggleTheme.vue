<template>
  <button
    @click="toggleTheme"
    class="text-gray-300 cursor-pointer pt-1 dark:text-black md:mx-4 h-5 w-5"
  >
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="adjust"
      class="svg-inline--fa fa-adjust fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { ActionTypes } from '@/store/modules/action-types'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ToggleTheme',
  setup() {
    const store = useStore()

    const toggleTheme = () => {
      store.dispatch(ActionTypes.toggle_theme)
    }

    return { toggleTheme }
  },
})
</script>

