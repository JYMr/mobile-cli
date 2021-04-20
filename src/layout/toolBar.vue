<template>
  <div class="toolbar flex ac" :class="position">
    <div
      v-for="item in list"
      :key="item.key"
      class="toolbar-item flex-1 flex ac jc"
      @click="link(item)"
    >
      <img :src="item.icon" :alt="item.name">
      {{item.name}}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { toolBarConfig } from '@/cli-config'

  export default defineComponent({
    name: 'ToolBar',
    props: {
      toolbar: {
        type: Object as toolBarConfig
      }
    },
    setup (props) {
      const { isIcon, position, data: list, toolbar } = ref(props)

      const router = useRouter()
      const link = (data) => {
        router.replace(data.path)
      }

      return {
        isIcon,
        position,
        list,
        link
      }
    }
  })
</script>
<style lang="scss" scoped>
  .toolbar {
    width: 100%;
    height: $toolbar-height;
    background: $blue;
    position: fixed;
    left: 0;
    color: $white;
    text-align: center;

    &.bottom {
      bottom: 0;
    }
    &.top {
      top: 0;
    }
    &-item {
      height: 100%;
      border-right: 1px $violet solid;
      font-size: 36px;
      font-weight: 600;

      &:last-child {
        border-right: none;
      }

      img {
        width: 40px;
        height: 40px;
        margin-right: 4px;
      }
    }
  }

</style>
