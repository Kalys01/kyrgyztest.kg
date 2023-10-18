<template>
  <Suspense>
    <template #default>
      <Users />
    </template>
    <template #fallback>
      <div class="flex justify-center items-center">Loading...</div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import Users from '@/components/Users.vue'
</script>
