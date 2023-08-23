<template>
  <div class="relative grid w-[92%] sm:w-[94%] h-80 sm:h-52 md:h-40 lg:h-48 mt-9 md:mt-0 xl:h-56 max-h-80 mx-3 xs:mx-5 md:mx-10 rounded-md overflow-hidden bg-black cursor-pointer shadow-2xl">
    <div class="w-full h-full transition duration-300 ease-in-out text-gray-400 absolute z-10 hover:text-white">
      <div class="absolute w-full h-[70%] sm:h-full bottom-0 p-3 sm:p-4 md:p-6 sm:w-[80%] rounded-md bg-opacity-50 sm:bg-opacity-0 backdrop-filter sm:backdrop-filter-none backdrop-blur-lg sm:backdrop-blur-none">
        <h1 class="timeline-title text-md lg:text-xl xl:text-3xl">{{ post.title }}</h1>
        <p class="text-gray-300 text-xs lg:text-sm ">
          {{ truncateText(post.body, 333) }}
        </p>
      </div>
    </div>
    <div class="overflow-hidden w-full h-1/2 sm:h-full sm:w-1/2 z-0 absolute sm:right-0">
      <img class="object-cover w-full sm:h-full" src="http://kyrgyztest.gov.kg/wp-content/uploads/2022/01/ОШМУ_1-520x245.jpeg" alt="">
    </div>
    <div class="absolute w-full sm:w-1/2 h-1/2 sm:h-full sm:right-0 bg-gradient-to-t from-black sm:bg-gradient-to-r sm:from-black" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";
import News from "@/models/ModelNews";

const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });

const store = useStore();

function truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
};

</script>
