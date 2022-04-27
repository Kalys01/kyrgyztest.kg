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
        v-for="i in 3"
        :key="i"
        :title="i.toString()"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
 import'vueperslides/dist/vueperslides.css'

export default defineComponent({
  components: {
    VueperSlides,
    VueperSlide
  },
  setup() {
    
  },
})
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