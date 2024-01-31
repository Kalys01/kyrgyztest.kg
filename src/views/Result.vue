<template>
  <div class="flex flex-col justify-center items-center py-20">
    <TheResult />
  </div>
</template>

<script lang="ts" setup>
import TheResult from '@/components/Results/TheResult.vue'
import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";

  const name = "Result";
  useLifecycleLogger({ name });

</script>

