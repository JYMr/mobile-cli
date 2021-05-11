<template>
  <h1>首页</h1>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import common from '@/api/common'
  export default defineComponent({
    name: 'Home',
    data () {
      return {
      }
    },
    setup() {
      common.testApi()
      return {}
    }
  })
</script>
<style lang="scss" scoped>
  h1 {
    font-size: 26px;
  }
</style>
