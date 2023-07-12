<template>
  <button
    class="w-full flex justify-center cursor-pointer border border-gray-700 dark:border-gray-300"
    :class="[backgroundColor, color, rounded, borderColor, paddingX, paddingY]"
  >{{ title }}
    <slot />
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    backgroundColor: {
      type: String,
      required: false
    },
    rounded: {
      type: String,
      required: false,
      default: "rounded-xl"
    },
    borderColor: {
      type: String,
      required: false,
      default: ""
    },
    paddingX: {
      type: String,
      required: false,
      default: "px-6"
    },
    paddingY: {
      type: String,
      required: false,
      default: "py-1"
    },
  })
</script>