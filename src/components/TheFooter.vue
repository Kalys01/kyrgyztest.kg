<template>
  <div class="flex justify-center items-center w-full h-[150px] bottom-0 border-t-[1px] border-white mb-12 xs:mb-0 bg-gray-300 text-gray-800 dark:text-gray-300 dark:bg-gray-900 transition duration-500">
    <p class="text-xs sm:text-sm md:text-xl">Государственное учреждение "КЫРГЫЗТЕСТ" © <span>{{ currentYear }}</span>.</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const currentYear = ref<number>(new Date().getFullYear());
</script>