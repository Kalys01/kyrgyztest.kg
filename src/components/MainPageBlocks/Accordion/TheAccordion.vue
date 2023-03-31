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

      <p
        class="text-sm md:text-md text-justify px-1 my-3 font-mono leading-6 text-gray-600"
        :class="isOpen ? 'd-block' : 'hidden'"
      >
        <slot></slot>
      </p>
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
