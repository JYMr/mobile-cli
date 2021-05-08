import axios, { AxiosResponse } from 'axios'
import { Notify } from 'vant'
import store from '@/store'
import { local } from '@/utils/storage'

const token = store.getters.token || local.get('token')

const http: any = axios.create({
  timeout: 60000,
  withCredentials: false,
  headers: {
    post: {
      'Content-Type': 'application/json'
    },
    common: {
      CGSDate: new Date().getTime(),
      PLAT: 'CGS-H5',
      Authorization: `Bearer ${token}`
    }
  }
})

/**
 * 请求拦截器
 * @param  {[type]} (config [description]
 * @return {[type]}         [description]
 */
http.interceptors.request.use(
  (config: any) => {
    if (config.mode && config.url) {
      config.url = `/${config.mode}/app${config.url}`
    }
    return config
  },
  (err:any) => {
    throw new Error(err)
  }
)

/**
 * 响应拦截器
 * @param  {[type]} (res) [description]
 * @return {[type]}       [description]
 */
http.interceptors.response.use(
  (res:any) => {
    const response = res.data
    if (res.status === 200 && response?.isSuccess) {
      return Promise.resolve(response.result)
    } else if (res.status === 200 && res.config.url.indexOf('aliyuncs.com') > -1 && !response) {
      return Promise.resolve(response.result)
    } else {
      Notify({ type: 'danger', message: response.message || '系统异常' })
      return Promise.reject(response)
    }
  },
  (error: any) => {
    // 错误
    const err = error.toString().split('code ')
    const code = parseInt(err[1] || -1e10, 10)
    const data = { data: { code } }

    return Promise.reject(data)
  }
)

export default http
