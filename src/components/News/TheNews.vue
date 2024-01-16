<template>
  <div
    class="grid grid-cols-12 bg-gray-500 "
    v-if="isLoading"
    v-for="i in 5"
  >
    <section class="col-span-1 md:col-span-3 bg-[#212121]" />
    <section class="col-span-11 md:col-span-9 border-l-2  py-5 border-gray-300 bg-gray-100 dark:bg-[#212121] transition duration-500">
      <SkeletonLoader class=" grid w-[92%] sm:w-[94%] h-80 sm:h-52 md:h-40 lg:h-48 mt-9 md:mt-0 xl:h-56 max-h-80 mx-3 xs:mx-5 md:mx-10 rounded-md overflow-hidden shadow-2xl" />
    </section>
  </div>

  <div
    class="grid grid-cols-12"
    v-else
    v-for="post in paginatedPosts"
    :key="post.id"
  >
    <section class="col-span-1 md:col-span-3 bg-[#212121]"/>

    <section class="col-span-11 md:col-span-9 border-l-2  py-5 border-gray-300 bg-gray-100 dark:bg-[#212121] transition duration-500">
      <div class="sticky top-0 z-20 bg-white w-full py-5 hidden">
        <span>2022</span>
      </div>
      <div>
      </div>
      <div class="py-5">
        <div class="w-5 h-5 rounded-full absolute -ml-3 bg-[#673AB7] flex justify-center items-center border-2 border-white">
          <div class="absolute">
            <ClockIcon class="h-6 w-6 text-gray-300"/>
          </div>
          <span class="absolute ml-36 w-[100px] md:-ml-36 text-gray-400 md:text-gray-300 text-xs md:text-sm dark:text-gray-300  transition duration-500">13 Feb 2022</span>
        </div>
        <router-link :to="`/news/${post.id}`">
          <NewsList :post="post"/>
        </router-link>
      </div>
    </section>
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
import { computed, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import NewsList from "@/components/News/NewsList.vue";
import SkeletonLoader from "@/components/ReusedComponents/SkeletonLoader.vue";
import { ClockIcon } from "@heroicons/vue/solid";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/modules/action-types";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const router = useRouter();
const route = useRoute();
const store = useStore();

const currentPage = ref(Number(route.query.page) || 1);

const itemsPerPage = 7; // Количество новостей на странице

onMounted( () => store.dispatch(ActionTypes.FetchPosts) );

const isLoading = computed( () => store.getters.GET_LOADING );

const posts = computed( () => store.getters.GET_POST );

const totalPages = computed( () => Math.ceil(posts.value.length / itemsPerPage) );

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return posts.value.slice(startIndex, endIndex);
});

function changePage(page: number) {
  router.push(`${route.path}?page=${page}`)  // saves current page when reloading 
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

</script>
