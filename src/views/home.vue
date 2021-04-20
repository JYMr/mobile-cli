<template>
  <h1>首页</h1>
</template>
<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Home',
    data () {
      return {
        list: []
      }
    },
    mounted() {
      // this.list = [1, 2]
      const data = [
        { label: 1, name: 11 },
        { label: 2, name: 22 }
      ]

      this.list = data.map(item => item.name)
    }
  })
</script>
<style lang="scss" scoped>
  h1 {
    font-size: 26px;
  }
</style>
