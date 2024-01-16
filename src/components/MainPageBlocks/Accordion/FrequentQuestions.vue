<template>
  <TheBlockComponent
    title="Часто задаваемые вопросы"
  >
    <TheAccordion title="Как оплатить за тест?">
      Even though both ways are fully capable of covering common use cases, the options API had its use but in the bigger picture it severely limited the developer as it abstracted away the reactivity details and enforced code organization via option groups.
    </TheAccordion>
    <TheAccordion title="Как узнать результаты?">
      The Composition API is centered around declaring reactive state variables directly in a function scope, and composing state from multiple functions together to handle complexity. Even though both ways are fully capable of covering common use cases, the options API had its use but in the bigger picture it severely limited the developer as it abstracted away the reactivity details and enforced code organization via option groups.
    </TheAccordion>
  </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/ReusedComponents/TheBlockComponent.vue";
import TheAccordion from "@/components/MainPageBlocks/Accordion/TheAccordion.vue";


</script>
