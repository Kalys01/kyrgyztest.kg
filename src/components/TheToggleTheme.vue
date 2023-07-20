<template>
  <button
    @click="toggleTheme"
    class="text-gray-300 cursor-pointer h-5 w-5"
  >
    <SunIcon
      v-if="isDayNigth"
      class="h-6 w-6 text-yellow-400"
    />
    <MoonIcon
      v-else
      class="h-6 w-6 text-gray-300"
    />
  </button>
</template>

<script lang="ts" setup>
import { ActionTypes } from "@/store/modules/action-types";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { SunIcon, MoonIcon } from '@heroicons/vue/solid';

const store = useStore();

const isDayNigth = ref(store.state.theme === 'dark');

const toggleTheme = () => {
  isDayNigth.value = !isDayNigth.value;
  store.dispatch(ActionTypes.toggle_theme);
}

</script>
