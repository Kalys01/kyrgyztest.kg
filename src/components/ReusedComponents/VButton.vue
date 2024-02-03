<template>
  <button
    class="cursor-pointer shadow-md rounded-md hover:text-white hover:bg-hoverColor border-[1px] border-gray-900 dark:border-gray-300 transition-all duration-200"
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
      default: 'text-gray-300'
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'bg-mainColor'
    },
    rounded: {
      type: String,
      required: false,
      default: ""
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