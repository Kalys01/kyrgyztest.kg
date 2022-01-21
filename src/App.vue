<template>
  <div class="h-96 bg-gray-400">
    <TheHeader />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue'

export default defineComponent({
  components: {
    TheHeader
  }

})
</script>

<style>

</style>
