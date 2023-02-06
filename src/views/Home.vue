<template>
  <TheFirstMainBlock />
  <!-- <TheCarousel /> -->
  <ThePayment />
  <TheStatistics />
  <TheForSchool />
  <TheGraphic />
</template>

<script lang="ts" setup>
import TheFirstMainBlock from "@/components/TheFirstMainBlock.vue";
import TheCarousel from "@/components/TheCarousel.vue";
import ThePayment from "@/components/Attention/ThePayment.vue";
import TheStatistics from "@/components/Statistics/TheStatistics.vue";
import TheForSchool from "@/components/TheForSchool.vue";
import TheGraphic from "@/components/TheGraphic.vue";

name: "Home"

</script>
