<template>
  <TheCarousel />
  <ThePayment />
  <TheStatistics />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheCarousel from "@/components/TheCarousel.vue";
import ThePayment from "@/components/Attention/ThePayment.vue";
import TheStatistics from "@/components/Statistics/TheStatistics.vue";

export default defineComponent({
  name: "Home",
  components: {
    TheCarousel,
    ThePayment,
    TheStatistics,
  },
  setup() {},
});
</script>
