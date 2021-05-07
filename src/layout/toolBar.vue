<template>
  <div class="toolbar" :class="prefixClass">
    <div
      v-for="(item, key) in list"
      :key="`toolbar-item_${key}`"
      class="toolbar-item"
      @click="link(item)"
    >
      <img :src="item.icon" :alt="item.name" />
      {{item.name}}
    </div>
  </div>
</template>

<script lang="ts">
  import { baseToolBar, toolBarConfig } from '@/config/types/cli-custom'
  import { defineComponent, ref, PropType } from 'vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'ToolBar',
    props: {
      toolbar: {
        required: true,
        type: Object as PropType<toolBarConfig>
      }
    },
    setup (props) {
      const { toolbar: { isIcon, position, data: list } } = ref(props).value

      const router = useRouter()
      const link = (data: baseToolBar) => {
        data.path && router.replace(data.path)
      }

      const prefixClass = `is-${position}`

      return {
        isIcon,
        prefixClass,
        list,
        link
      }
    }
  })
</script>

<style lang="scss" scoped>

  .toolbar {
    @include flex;
    @include justify-content(center);
    width: 100%;
    height: $toolbar-height;
    position: fixed;
    left: 0;
    color: #333;
    text-align: center;

    &-item {
      @include flex;
      @include justify-content(center);
      @include align-items(center);
      flex:1;
      height: 100%;
      font-size: 24px;
      flex-direction: column;

      img {
        width: 40px;
        height: 40px;
      }
    }

    @include when(top){
      top: 0;
    }

    @include when(bottom){
      bottom: 0;
    }
  }

</style>
