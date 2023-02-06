<template>
  <div class="mt-10 rounded-2xl overflow-hidden">
    <vueper-slides
      :arrows="true"
      :visible-slides="1"
      :dragging-distance="50"
      :slideMultiple="true"
      :arrows-outside="false"
      :infinite="false"
      :autoplay="true"
    >
      <vueper-slide
        class="bg-yellow-400 text-red-500 text-right"
        v-for="(n,i) in normativeActs"
        :key="i"
        :title="n.title"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { ref } from "@vue/reactivity";

const normativeActs = ref([
  {
    title: "Конституция Кыргызской Республики",
  },
  {
    title: "Закон «О государственном языке Кыргызской Республики» № 54 от 02.04.2004 г.",
  },
  {
    title: "Концепция разработки и внедрения системы оценивания государственного языка «Кыргызтест» № 150 от 26.03.2013 г.",
  },
  {
    title: "Национальная программа развития государственного языка и совершенствования языковой политики в Кыргызской Республике на 2014-2020 годы Национальная программа развития государственного языка и совершенствования Национальная программа развития государственного языка и совершенствования Национальная программа развития государственного языка и совершенствования",
  }
])
</script>

<style scoped>
/* .slide {
  width: 200px;
  height: 200px;
  background-color: #119c38;
} */

/* .vueperslide {
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
} */
/* .vueperslide:nth-of-type(1) {
  width: 100% !important;
}
.vueperslide:last-of-type {
  width: 100% !important;
} */

/* .vueperslide__content-wrapper {
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: Tahoma, Geneva, sans-serif;
} */
/* .vueperslide__title {
  font-size: 7em;
  opacity: 0.6;
  color: #fff;
} */

/* p {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
  font: 12px Tahoma, Geneva, sans-serif;
} */
</style>
