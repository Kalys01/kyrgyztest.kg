<template>
  <nav class="flex justify-center m-16">
    <ul class="flex space-x-2">
      <li>
        <TheButton
          :title="'<<<'"
          :backgroundColor="'bg-[#673AB7]'"
          :color="'text-gray-300'"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        />
      </li>
      <li v-for="page in totalPages" :key="page">
        <TheButton
          :class="{'bg-[#673AB7] text-gray-300': currentPage === page}"
          @click="changePage(page)"
        >
          {{ page }}
        </TheButton>
      </li>
      <li>
        <TheButton
          :title="'>>>'"
          :backgroundColor="'bg-[#673AB7]'"
          :color="'text-gray-300'"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import TheButton from '@/components/UI/TheButton.vue'
import { ref } from 'vue';

  const props = defineProps({
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    changePage: {
      type: Function,
      required: true,
    }
});
</script>

<style scoped>

/* .pagination-link {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background-color: #673AB7;
 }

 .pagination-link.active {
  background-color: #673AB7;
  color: #fff;
} */
</style>
