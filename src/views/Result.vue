<template>
  <div class="flex flex-col justify-center items-center py-20">
    <TheResult />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheResult from '@/components/TheResult.vue'

export default defineComponent({
  components: {
    TheResult
  }

})
</script>

