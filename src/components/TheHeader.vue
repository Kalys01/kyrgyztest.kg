<template>
  <div>
    <TheHeaderUpNav />
    <TheHeaderNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeaderUpNav from "./TheHeaderUpNav.vue";
import TheHeaderNav from "./TheHeaderNav.vue";

export default defineComponent({
  components: {
    TheHeaderUpNav,
    TheHeaderNav,
  },
});
</script>

<style></style>
