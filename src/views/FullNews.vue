<template>
  <Suspense>
    <template #default>
      <FullNews />
    </template>
    <template #fallback>
      <div class="flex justify-center items-center">Loading...</div>
    </template>
  </Suspense>
  
</template>

<script lang="ts" setup>
import FullNews from "@/components/News/FullNews.vue";

</script>
