import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRoute } from './modules'

const routes: Array<RouteRecordRaw> = [
  ...createRoute()
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
