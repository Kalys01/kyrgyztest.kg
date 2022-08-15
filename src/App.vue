<template>
  <div>
    <TheMobileSidebar />
    <TheHeader />
    <AppLayout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import TheMobileSidebar from '@/components/TheMobileSidebar.vue'

export default defineComponent({
  components: {
    TheHeader,
    AppLayout,
    TheMobileSidebar
  }

})
</script>

<style>
.router-link-active {
  color: rgb(255, 255, 255);
}
.router-link-exact-active {
  border-bottom: 2px solid white;
  /* transition-duration: .5s; */
}
</style>
