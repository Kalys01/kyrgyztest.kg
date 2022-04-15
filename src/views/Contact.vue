<template>
  <div class="flex justify-center">
    <div class="w-full max-w-screen-xl bg-gray-400">
      <div class="w-full px-3 lg:px-10 bg-[#212121] flex justify-end items-center py-20 relative">
        <ContactsMap />
        <ContactsInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactsInfo from '@/components/Contact/TheContactsInfo.vue'
import ContactsMap from '@/components/Contact/TheContactsMap.vue'

export default defineComponent({
  components: {
    ContactsInfo,
    ContactsMap
  }

})
</script>

<style scoped>
.high {
  min-height: calc("100vh - 150px");
}
</style>
