<template>
  <button class="cursor-pointer border-2 border-white rounded-md" @click="openSidebar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { MutationTypes } from "@/store/modules/mutation-types";
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "openSidebar",
  setup() {
    const store = useStore();

    const openSidebar = () => {
      store.commit(MutationTypes.SET_SHOWSIDEBAR, true);
    };

    return { openSidebar };
  },
});
</script>
