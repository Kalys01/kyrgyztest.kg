<template>
  <TheBlockComponent
    class="bg-opacity-60 backdrop-filter backdrop-blur-lg"
    :title="$t('profileNavs.title')"
    :backgroundColor="'bg-black text-gray-300'"
    :paddingY="'py-10'"
    :rounded="'rounded-lg'"
  >
    Account
  </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/ReusedComponents/TheBlockComponent.vue";

</script>
