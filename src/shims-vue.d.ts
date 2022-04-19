/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vueperslides' {
  class VueperSlides extends DefineComponent {}
  class VueperSlide extends DefineComponent {}
}