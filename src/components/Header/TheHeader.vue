<template>
  <header
    class="w-full z-50 ease-in-out transition-all duration-500 sticky top-0"
    :class=" isHeaderHidden ? 'lg:translate-y-0' : 'lg:-translate-y-full' "
  >
    <TheHeaderUpNav />
    <TheHeaderNav :isHeaderHide = "isHeaderHidden"/>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TheHeaderUpNav from "@/components/Header/TheHeaderUpNav.vue";
import TheHeaderNav from "@/components/Header/TheHeaderNav.vue";

const isHeaderHidden = ref(true);
let prevScrollY = 200;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 100) {
    isHeaderHidden.value = currentScrollY < prevScrollY;
    prevScrollY = currentScrollY;
  }
};

window.addEventListener("scroll", handleScroll);

</script>
