<template>
  <div class="flex flex-col justify-center text-center my-20">
    <h1 class="text-xl font-bold mb-8 uppercase dark:text-white">Статистика</h1>
    <div class=" dark:bg-gray-900">
      <BarChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarChart from './BarChart'

export default defineComponent({
  components: {
    BarChart
  }

})
</script>
