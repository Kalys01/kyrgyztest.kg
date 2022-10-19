<template>
  <button
    class="cursor-pointer"
    @click="openSidebar"
  >
    <MenuIcon class="w-6 h-6"/>
  </button>
</template>

<script lang="ts" setup>
import { MutationTypes } from "@/store/modules/mutation-types";
import { useStore } from "@/store";
import { MenuIcon } from '@heroicons/vue/outline'

const store = useStore();

const openSidebar = () => {
  store.commit(MutationTypes.SET_SHOWSIDEBAR, true);
};
</script>
