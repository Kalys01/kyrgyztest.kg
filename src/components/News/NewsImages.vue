<template>
  <viewer class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]" :images="images">
    <div v-for="src in images" :key="src" class="">
      <img
        class="rounded-md h-80 w-full object-cover cursor-pointer"
        :src="src"
      >
    </div>
  </viewer>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

</script>
