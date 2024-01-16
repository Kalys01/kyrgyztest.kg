<template>
  <div
    class="w-full flex justify-center"
    :class="backgroundColor, paddingY, rounded"
  >
    <div class="w-full flex flex-col items-center lg:w-11/12 mx-2 max-w-screen-xl">
    <h1 class="mb-[100px] text-4xl font-semibold">{{ title }}</h1>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: false
    },
    backgroundColor: {
      type: String,
      required: false
    },
    paddingY: {
      type: String,
      required: false,
      default: 'py-28'
    },
    rounded: {
      type: String,
    }
  })
</script>
