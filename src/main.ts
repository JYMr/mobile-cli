import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import plugins from '@/plugins/import-plugins'

createApp(App)
  .use(store)
  .use(router)
  .use(plugins)
  .mount('#app')
