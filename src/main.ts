import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/plugins/import-plugins'
import { beforeInit } from '@/plugins/before-init'

beforeInit().then(
  () => {
    createApp(App).use(store).use(router).mount('#app')
  }
)
