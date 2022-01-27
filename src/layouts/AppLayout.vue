<template>
  <component :is="layout">
    <router-view />
    <div class="flex justify-center items-center w-full h-[50px] bottom-0 bg-gray-900 text-gray-100">
      footer
    </div>
  </component>
</template>

<script lang="ts">
  import AppLayoutDefault from './AppLayoutDefault.vue'
  import { defineComponent, markRaw, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const layout = ref()
    const route = useRoute()

    watch(
      () => route.meta?.layout as string | undefined,
      async (metaLayout) => {
        try {
          const component = metaLayout && await import(`./${metaLayout}.vue`)
          layout.value = markRaw(component?.default || AppLayoutDefault)
        } catch (error) {
          layout.value = markRaw(AppLayoutDefault)
        }
      },
      {
        immediate: true
      }
    )
    
    return { layout }
  }
  
})
</script>
