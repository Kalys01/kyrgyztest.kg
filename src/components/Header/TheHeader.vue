<template>
  <header
    class="w-full z-50 ease-in-out transition-all duration-500 translate-y-100"
    :class="{ 'sticky top-9 lg:top-0': isHeaderHidden }"
  >
    <TheHeaderUpNav />
    <TheHeaderNav />
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TheHeaderUpNav from "@/components/Header/TheHeaderUpNav.vue";
import TheHeaderNav from "@/components/Header/TheHeaderNav.vue";

const isHeaderHidden = ref(false);
let prevScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isHeaderHidden.value = currentScrollY < prevScrollY && currentScrollY > 700;
  prevScrollY = currentScrollY;
};

window.addEventListener('scroll', handleScroll);

</script>
