import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRoute } from './modules'
import store from '@/store'

// 可过滤校验的路由
const IGNORE_ROUTES_NAME: string[] = ['Login']
const IGNORE_ROUTES_PATH: string[] = ['']

const routes: Array<RouteRecordRaw> = [
  ...createRoute()
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/**
 * 路由前置拦截器
 */
router.beforeEach((to, from, next) => {
  // TODO: 进度条开始

  const { name, path } = to

  // 判断是否过滤
  if (
    (!!name && IGNORE_ROUTES_NAME.includes(String(name))) ||
    IGNORE_ROUTES_PATH.includes(path)
  ) {
    next()
    return false
  }

  // 判断登录状态
  if (store.getters.LOGIN_STATUS) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

/**
 * 路由后置事件
 */
router.afterEach((to, from) => {
  // TODO: 进度条结束
})

export default router
