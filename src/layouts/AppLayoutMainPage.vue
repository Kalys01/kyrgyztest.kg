<template>
  <div class="w-full flex flex-col  min-h-screen bg-white dark:bg-gray-900 dark:text-white transition duration-500">
      <slot />
  </div>
</template>

<script lang="ts">
import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger';

useLifecycleLogger({ name: "AppLayoutMainPage" });
</script>
