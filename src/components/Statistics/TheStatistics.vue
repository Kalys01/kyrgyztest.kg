<template>
  <TheBlockComponent
    title="Статистика"
  >
    <div class="w-full flex-col text-center">
      <div class="dark:bg-gray-900">
        <BarChart />
      </div>
    </div>
  </TheBlockComponent>

</template>

<script lang="ts" setup>
import BarChart from './BarChart'
import TheBlockComponent from "@/components/TheBlockComponent.vue";

</script>
