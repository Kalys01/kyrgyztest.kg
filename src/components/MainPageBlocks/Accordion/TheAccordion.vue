<template>
    <div class="w-full text-md md:text-xl font-semibold py-4 leading-relaxed border-t-[.5px] border-gray-400 dark:text-gray-100">
      <div
        class="flex justify-between cursor-pointer"
        @click="isOpen = !isOpen"
      >
        <h1>{{title}}</h1>
        <div class="flex justify-center items-center ml-2">
          <PlusIcon
            class="h-6 w-6 transform transition duration-300fw"
            :class="isOpen&&'rotate-45'"
          />
        </div>
      </div>

      <Transition>
        <p
          class="text-sm md:text-md text-justify px-1 my-3 font-mono leading-6 text-gray-600"
          v-if="isOpen"
        >
          <slot></slot>
        </p>
      </Transition>
    </div>
</template>

<script lang="ts" setup>
import { PlusIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  transform: translateY(0);
  
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100%);
  transition: 0s ease;
}
</style>
