<template>
  <div
    class="grid grid-cols-12"
    v-for="post in paginatedPosts"
    :key="post.id"
  >
    <div class="col-span-1 md:col-span-3 bg-[#212121]"></div>
    <div class="col-span-11 md:col-span-9 border-l-2  py-5 border-gray-300 bg-gray-100 dark:bg-[#212121] transition duration-500">
      <div class="sticky top-0 z-20 bg-white w-full py-5 hidden">
        <span>2022</span>
      </div>
      <div class="py-5">
        <div class="w-5 h-5 rounded-full absolute -ml-3 bg-black flex justify-center items-center border-2 border-white">
          <div class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 " viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="absolute ml-36 w-[100px] md:-ml-36 text-gray-400 md:text-gray-300 text-xs md:text-sm dark:text-gray-300  transition duration-500">13 Feb 2022</span>
        </div>
        <router-link to="/news/2">
          <div class="relative grid w-[92%] sm:w-[94%] h-80 sm:h-52 md:h-40 lg:h-48 mt-9 md:mt-0 xl:h-56 max-h-80 mx-3 xs:mx-5 md:mx-10 rounded-md overflow-hidden bg-black cursor-pointer shadow-2xl">
            <div class="w-full h-full transition duration-300 ease-in-out text-gray-400 absolute z-10 hover:text-white">
              <div class="absolute w-full h-[70%] sm:h-full bottom-0 p-3 sm:p-4 md:p-6 sm:w-[80%] rounded-md bg-opacity-50 sm:bg-opacity-0 backdrop-filter sm:backdrop-filter-none backdrop-blur-lg sm:backdrop-blur-none">
                <h1 class="timeline-title text-md lg:text-xl xl:text-3xl">{{ post.title }}</h1>
                <p class="text-gray-300 text-xs lg:text-sm ">
                {{ post.body }}
                </p>
              </div>
            </div>
            <div class="overflow-hidden w-full h-1/2 sm:h-full sm:w-1/2 z-0 absolute sm:right-0">
              <img class="object-cover w-full sm:h-full" src="http://kyrgyztest.gov.kg/wp-content/uploads/2022/01/ОШМУ_1-520x245.jpeg" alt="">
            </div>
            <div class="absolute w-full sm:w-1/2 h-1/2 sm:h-full sm:right-0 bg-gradient-to-t from-black sm:bg-gradient-to-r sm:from-black"></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <v-pagination
    class="flex justify-center text-gray-900 dark:text-gray-300"
    v-model="currentPage"
    :pages="totalPages"
    :range-size="1"
    active-color="#673AB7"
    @update:modelValue="changePage(currentPage)"
  />
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios'
import News from '@/models/ModelNews/News';

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const router = useRouter();
const route = useRoute();

const posts = ref<News[]>([]);
const currentPage = ref(Number(route.query.page) || 1);
const itemsPerPage = 7; // Количество новостей на странице

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchPosts();
});

const totalPages = computed(() => {
  return Math.ceil(posts.value.length / itemsPerPage);
});

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return posts.value.slice(startIndex, endIndex);
});

function changePage(page) {
  router.push(`${route.path}?page=${page}`)
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

</script>
