<template>
  <main class="w-full flex justify-center bg-white dark:bg-gray-900 dark:text-white transition duration-500">
    <div class="w-full lg:w-11/12 max-w-screen-xl min-h-screen">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>
