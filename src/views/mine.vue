<template>
  <h1>我的</h1>
  <br>
  <h1 @click="login">登录</h1>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'mine',
    setup () {
      const router = useRouter()
      const login = () => {
        console.log('Login')
        router.push({
          name: 'Login'
        })
      }

      return {
        login
      }
    }
  })
</script>
