import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRoute } from './modules'
import NProgress from 'nprogress'
import store from '@/store'
import { wechatUtil } from '@/plugins/import-plugins'
import Browser from '@/utils/Browser'

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
  // 进度条开始
  NProgress.start()

  const { name, path, query } = to

  // 判断是否过滤
  if (
    (!!name && IGNORE_ROUTES_NAME.includes(String(name))) ||
    IGNORE_ROUTES_PATH.includes(path)
  ) {
    next()
    return false
  }

  // 判断微信环境
  // if(Browser.isWeChat()){
  //
  // 判断是否是带code授权链接
  if (path.includes('/auth') && !!query?.code) {
    // loading
    // 请求TOKEN
    store.commit('SET_TOKEN', '1')
  }
  // }

  // 判断登录状态
  if (store.getters.LOGIN_STATUS) {
    next()
  } else {
    if (Browser.isWeChat()) {
      wechatUtil.openWechatAuth()
    } else {
      next({
        name: 'Login'
      })
    }
  }
})

/**
 * 路由后置事件
 */
router.afterEach((to, from) => {
  // 进度条结束
  NProgress.done()
})

export default router
