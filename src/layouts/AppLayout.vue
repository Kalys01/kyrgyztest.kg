<template>
  <component :is="layout">
    <router-view />
    <TheFooter />
    <MobileBottomSticky class=" xs:hidden"/>
  </component>
</template>

<script lang="ts">
  import AppLayoutDefault from './AppLayoutDefault.vue'
  import { defineComponent, markRaw, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import TheFooter from '@/components/TheFooter.vue'
  import MobileBottomSticky from '@/components/TheMobileBottomSticky.vue'

export default defineComponent({
  components: {
    TheFooter,
    MobileBottomSticky
  },
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
