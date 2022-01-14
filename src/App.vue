<template>
  <TheHeaderNavbar />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeaderNavbar from '@/components/TheHeaderNavbar.vue'

export default defineComponent({
  components: {
    TheHeaderNavbar
  }

})
</script>

<style>

</style>
