<template>
  <div class="flex flex-col lg:hidden w-[300px] h-[100%] px-5 py-20 xs:py-10 text-gray-300 bg-black z-30 fixed bg-opacity-50 backdrop-filter backdrop-blur-lg">
    <ul
      class="w-full h-full"
      v-for="(navup, id) in navups"
      :key="id"
    >
      <li>{{navup.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()
const navups = store.getters.GET_NAVUPS
console.log(navups)
</script>