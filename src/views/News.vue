<template>
  <div class="">
    <TheNews />
  </div>
</template>

<script lang="ts" setup>
import TheNews from "@/components/News/TheNews.vue";
import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";

  const name = "News";
  useLifecycleLogger({ name });

</script>
