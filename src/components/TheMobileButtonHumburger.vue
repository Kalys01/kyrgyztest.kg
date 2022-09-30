<template>
  <button class="cursor-pointer border-2 border-white rounded-md" @click="toggleSidebar">
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
import { ActionTypes } from "@/store/modules/action-types";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "toggleSidebar",
  setup() {
    const store = useStore();

    const toggleSidebar = () => {
      store.dispatch(ActionTypes.toggle_sidebar);
    };

    return { toggleSidebar };
  },
});
</script>
