<template>
  <div>
    <TheHeader />
    <AppLayout />
    <TheFooter />
    <MobileBottomSticky class="xs:hidden"/>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue"
import AppLayout from "@/layouts/AppLayout.vue"
import TheFooter from '@/components/TheFooter.vue'
import MobileBottomSticky from '@/components/TheMobileBottomSticky.vue'

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
