<template>
  <div class="">
    <TheHeader />
    <main>
      <AppLayout />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue'
import AppLayout from '@/layouts/AppLayout.vue'

export default defineComponent({
  components: {
    TheHeader,
    AppLayout
  }

})
</script>

<style>

</style>
