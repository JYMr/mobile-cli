<template>
  <div class="mobile-wrap" :class="wrapClass">
    <router-view />

    <toolBar v-show="showToolbar" :toolbar="TOOLBAR" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import toolBar from './toolBar.vue'
  import TOOLBAR from '@/config/toolbar'
  import { ToolBarType } from '@/assets/constant/ToolBarType'

  export default defineComponent({
    components: {
      toolBar
    },
    setup () {
      const { position, data } = TOOLBAR
      const pathList = data.map(item => item.path)
      const route = useRoute()

      const showToolbar = computed(() => pathList.includes(route.path))
      const wrapClass = computed(() => {
        return [
          {
            'is-toolbar': route.meta.layoutMode === ToolBarType.TOOLBAR,
            top: position === 'top'
          }
        ]
      })

      return {
        showToolbar,
        wrapClass,
        position,
        TOOLBAR
      }
    }
  })
</script>
<style lang="scss" scoped>
  .is-toolbar {
    padding-bottom: $toolbar-height + 20px;

    &.top {
      padding-bottom:0;
      padding-top: $toolbar-height + 20px;
    }
  }
</style>
