<template>
  <input
    class="outline-none px-2 text-gray-900 dark:text-gray-300 dark:bg-gray-900 block min-w-[260px] py-1.5 placeholder:text-gray-300 hover:shadow-sm border-[1px] border-gray-300 hover:border-mainColor focus:shadow-sm focus:border-mainColor text-sm sm:text-md sm:leading-6 transition-all duration-200"
    :class="[rounded, border]"
    :type="type"
    :placeholder="pleaceholder"
    :autocomplete="autocomplete"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'text'
  },
  autocomplete: {
    type: String,
    required: true,
    default: ''
  },
  pleaceholder: {
    type: String,
    reguired: true,
    default: ''
  },
  rounded: {
    type: String,
    required: false,
    default: 'rounded-md'
  },
  border: {
    type: String,
    required: false
  }
})
</script>
