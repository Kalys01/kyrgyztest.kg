<template>
  <TheFirstMainBlock />
  <!-- <TheCarousel /> -->
  <ThePayment />
  <TheStatistics />
  <TheForSchool />
  <TheGraphic />
  <TheChannels />
  <FrequentQuestions/>
</template>

<script lang="ts" setup>
import TheFirstMainBlock from "@/components/MainPageBlocks/TheFirstMainBlock.vue";
import TheCarousel from "@/components/TheCarousel.vue";
import ThePayment from "@/components/MainPageBlocks/ThePayment.vue";
import TheStatistics from "@/components/MainPageBlocks/Statistics/TheStatistics.vue";
import TheForSchool from "@/components/MainPageBlocks/TheForSchool.vue";
import TheGraphic from "@/components/MainPageBlocks/TheGraphic.vue";
import TheChannels from "@/components/MainPageBlocks/TheChannels.vue";
import FrequentQuestions from "@/components/MainPageBlocks/Accordion/FrequentQuestions.vue";

name: "Home"

</script>
