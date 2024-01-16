<template>
  <TheBlockComponent
    class="bg-opacity-60 backdrop-filter backdrop-blur-lg"
    :title="$t('profileNavs.title')"
    :backgroundColor="'bg-gray-900 text-gray-300'"
    :paddingY="'py-10'"
    :rounded="'rounded-lg'"
  >
    <div class="w-full border-t-2 mb-10">
      <h1>Vue.js 3 Fundamentals with the Composition API</h1>
      <p>Learn the fundamental concepts and get up and running with Vue.js 3 with the Composition API. Perfect if you haven't touched Vue before, or you're just getting started!</p>
    </div>

    <div class="w-full border-t-2 ">
      <h1>Vue.js 3 Fundamentals with the Composition API</h1>
      <p>Learn the fundamental concepts and get up and running with Vue.js 3 with the Composition API. Perfect if you haven't touched Vue before, or you're just getting started!</p>
    </div>
  </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/ReusedComponents/TheBlockComponent.vue";

</script>
