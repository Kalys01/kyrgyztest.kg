<template>
  <nav
    class="flex flex-col w-[300px] mt-9 lg:mt-0 xs:p-7 text-gray-900 bg-gray-400 border-r-[1px] border-white rounded-r-lg bg-opacity-60"
  >
    <section class="w-full flex py-5 items-center flex-col gap-2 border-b-2 border-white">
      <div class="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#673AB7] text-white text-2xl font-semibold">K</div>
      <p class="text-2xl font-semibold">Kalys</p>
      <p>kalysosmon96.g@gmail.com</p>
    </section>
    <section class="w-full flex justify-center items-center py-5">
      <ul class="flex flex-col gap-2">
        <li v-for="nav in navs" :key="nav.to">
          <router-link :to=nav.to> {{ nav.title }} </router-link>
        </li>
      </ul>
    </section>
  </nav>

</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "@/store";
import { messages } from '@/locales/index';

const store = useStore();
const lang = ref(localStorage.getItem('lang') || store.state.lang);
const navs = computed( () => messages[lang.value].profileNavs );
</script>
