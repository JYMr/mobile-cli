<template>
  <div class="mobile-wrap" :class="wrapClass">
    <router-view />

    <!--    ToolBar-->
    <toolBar />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import toolBar from './toolBar.vue'

  export default defineComponent({
    components: {
      toolBar
    },
    computed: {
      wrapClass() {
        return [
          {
            'is-toolBar': this.$route.meta.layoutMode === 'toolbar'
          }
        ]
      }
    }
  })
</script>
