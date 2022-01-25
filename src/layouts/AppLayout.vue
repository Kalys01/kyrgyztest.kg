<template>
  <component :is="layout">
    <router-view />
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
