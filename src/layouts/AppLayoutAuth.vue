<template>
  <div class="w-full flex justify-center bg-white dark:bg-gray-900 dark:text-white transition duration-500">
    <div class="flex flex-col items-center w-full lg:w-11/12 min-h-screen">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger';

useLifecycleLogger({ name: "AppLayoutLogin" });
</script>
