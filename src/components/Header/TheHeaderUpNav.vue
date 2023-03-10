<template>
  <div
    class="top-0 fixed lg:relative z-30 flex lg:justify-center justify-end items-center w-full py-1 lg:px-1 bg-gray-900 text-gray-300"
  >
    <div
      class="flex justify-between w-full text-xs md:text-sm lg:justify-around lg:gap-4 xl:gap-16"
    >
      <ul class="hidden lg:flex justify-around font-semibold py-2 text-xs xl:text-sm">
        <li class="xl:mx-3" v-for="(navup, index) in navups" :key="index">
          <router-link
            class="text-gray-300 px-3 py-2 rounded-sm hover:border-b-2 hover:border-white"
            :to="navup.to"
          >
            {{ navup.title }}
          </router-link>
        </li>
      </ul>
      <div class="flex items-center mx-5 sm:mr-20 lg:hidden">
        <TheMobileButtonHumburger />
        <div class="mx-3 flex xs:hidden">LOGO</div>
      </div>

      <div class="hidden items-center 2xl:flex">Пн-Пт. 9:00 - 17:30</div>
      <div class="flex mx-5 lg:mx-0">
        <div class="lg:hidden flex items-center">
          <MultiLanguage />
        </div>
        <div class="flex items-center right-0 py-1">
          <TheToggleTheme />
        </div>
      </div>
    </div>
  </div>
  <TheMobileSidebarOverlay
    class="ease-in-out transition-all duration-500"
    v-show="isShowSidebar"
    @click="closeSidebar"
  />
  <TheMobileSidebar />
</template>

<script lang="ts" setup>
import NavUp from "@/models/ModelNavUp";
import TheMobileButtonHumburger from "@/components/TheMobileButtonHumburger.vue";
import TheToggleTheme from "@/components/TheToggleTheme.vue";
import TheMobileSidebar from "@/components/TheMobileSidebar.vue";
import TheMobileSidebarOverlay from "@/components/TheMobileSidebarOverlay.vue";
import MultiLanguage from "@/components/MultiLanguage.vue";
import { computed, onBeforeMount, watch } from "vue";
import { MutationTypes } from "@/store/modules/mutation-types";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/modules/action-types";

const store = useStore();

const navups = store.getters.GET_NAVUPS;

onBeforeMount( () => store.dispatch(ActionTypes.INIT_THEME) );

const theme = computed( () => store.getters.GET_THEME );
watch(theme, (newTheme) => {
  const addTheme = document.querySelector("body") as HTMLElement;

  newTheme === 'light'
    ? addTheme.classList.remove("dark")
    : addTheme.classList.add("dark");
});

const isShowSidebar = computed( () => store.getters.GET_SHOWSIDEBAR );

const closeSidebar = () => store.commit(MutationTypes.SET_SHOWSIDEBAR, false);

</script>
