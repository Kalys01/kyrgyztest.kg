<template>
  <nav class="flex justify-center m-16">
    <ul class="flex space-x-2">
      <li>
        <button
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
          class="pagination-link"
        >
          Previous
        </button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button
          @click="changePage(page)"
          :class="{'pagination-link active': currentPage === page}"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
          class="pagination-link"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  props: {
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
    },
  },
};
</script>

<style scoped>

.pagination-link {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background-color: #673AB7;
  cursor: pointer;
}

.pagination-link.active {
  background-color: #673AB7;
  color: #fff;
}
</style>
