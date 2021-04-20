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
            'is-toolbar': pathList.includes(route.path),
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
<!--<script lang="ts">
  import { defineComponent } from 'vue'
  import toolBar from './toolBar.vue'
  import TOOLBAR from '@/config/toolbar'

  interface LayoutInterface {
    path?: string[],
    [key: string]: any
  }

  export default defineComponent({
    components: {
      toolBar
    },
    data () {
      return {
        TOOLBAR,
        path: []
      } as LayoutInterface
    },
    computed: {
      wrapClass() {
        console.log(this.$route)
        return [
          {
            'is-toolBar': this.$route.meta.layoutMode === 'toolbar'
          }
        ]
      }
    },
    mounted(): void {
      this.path = TOOLBAR.data.map(item => item.path)
    }
  })
</script>-->
<style lang="scss" scoped>
  .is-toolbar {
    padding-bottom: $toolbar-height + 20px;

    &.top {
      padding-bottom:0;
      padding-top: $toolbar-height + 20px;
    }
  }
</style>
