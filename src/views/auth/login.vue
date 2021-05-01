<template>
  <div class="login">
    <button @click="$store.commit('SET_TOKEN', '1');$router.push('/')">登录</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'login'
  }
</script>

<style lang="scss" scoped>

</style>
