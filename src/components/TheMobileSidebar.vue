<template>
  <nav
    class="flex flex-col lg:hidden w-[300px] h-[100%] px-5 py-20 xs:py-10 text-gray-300 bg-black z-50 border-r-2 border-white rounded-r-lg fixed bg-opacity-50 backdrop-filter backdrop-blur-lg ease-in-out transition-all duration-500"
    :class="{ '-translate-x-full': !isShowSidebar }"
  >
    <button @click="close">close</button>
    <ul class="w-full h-full" v-for="(navup, id) in navups" :key="id">
      <li>{{ navup.title }}</li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { MutationTypes } from "@/store/modules/mutation-types";

import { ref, computed } from "vue";

const store = useStore();
const navups = store.getters.GET_NAVUPS;

const close = () => {
  store.commit(MutationTypes.SET_SHOWSIDEBAR, false);
};
const isShowSidebar = computed(() => store.getters.GET_SHOWSIDEBAR);
</script>
