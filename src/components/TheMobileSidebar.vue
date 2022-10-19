<template>
  <nav
    class="flex flex-row  lg:hidden w-[300px] h-[100%] xs:py-10 text-gray-400 bg-black z-50 border-r-[1px] border-white rounded-r-lg fixed bg-opacity-60 backdrop-filter backdrop-blur-lg ease-in-out transition-all duration-500"
    :class="{ '-translate-x-full': !isShowSidebar }"
  >
    <div class="w-14 h-full p-3 flex flex-col item-center border-r-[1px] border-white rounded-r-lg">
      <button
        class="flex"
        @click="closeSidebar"
      >
        <ChevronLeftIcon class="w-6 h-6" />
      </button>
    </div>
    
    <div class="m-4 mt-20">
      <ul>
        <li
          class="my-10"
          v-for="(navup, id) in navups"
          :key="id"
        >
          <router-link
            :to="navup.to"
            @click="closeSidebar"
          >
            {{ navup.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { MutationTypes } from "@/store/modules/mutation-types";
import { computed } from "vue";
import { ChevronLeftIcon } from '@heroicons/vue/outline'

const store = useStore();
const navups = store.getters.GET_NAVUPS;

const closeSidebar = () => {
  store.commit(MutationTypes.SET_SHOWSIDEBAR, false);
};
const isShowSidebar = computed(() => store.getters.GET_SHOWSIDEBAR);
</script>
