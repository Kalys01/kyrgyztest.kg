<template>
  <div>
    <TheHeaderUpNav />
    <TheHeaderNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeaderUpNav from "@/components/Header/TheHeaderUpNav.vue";
import TheHeaderNav from "@/components/Header/TheHeaderNav.vue";

export default defineComponent({
  components: {
    TheHeaderUpNav,
    TheHeaderNav,
  },
});
</script>

<style></style>
