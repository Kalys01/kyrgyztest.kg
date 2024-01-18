<template>
  <TheBlockComponent
    class="bg-opacity-60 backdrop-filter backdrop-blur-lg"
    :title="$t('profileNavsName.home')"
    :backgroundColor="'bg-black text-gray-300'"
    :paddingY="'py-10'"
    :rounded="'rounded-lg'"
  >
    Home
  </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/ReusedComponents/TheBlockComponent.vue";

</script>
