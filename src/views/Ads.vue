<template>
  <div class="flex flex-col justify-center items-center py-20">
    <TheAccordion />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheAccordion from '@/components/TheAccordion.vue'

export default defineComponent({
components: {
    TheAccordion
  },
})
</script>

