import { toParams } from '.'
import { WechatStatus } from '@/assets/constant/Wechat'

interface wechatConfig{
  debug?: boolean
  appId: string
  redirectUri:string
  responseType?:string
  scope?:string
  state?:number
}

interface wechatAuthConfig {
  timestamp: number|string
  nonceStr: string
  signature: string
  jsApiList: string[]
  openTagList: string[]
}

/**
 * 微信环境处理工具
 */
export default class WechatUtil {
  private WECHAT_AUTH_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
  instance: WechatUtil|null = null
  // 微信配置缓存
  wechatConfig:wechatConfig

  constructor(wechatConfig: wechatConfig) {
    this.wechatConfig = wechatConfig

    if (this.instance) {
      return this.instance
    }
    this.instance = this
  }

  /**
   * 获取当前url
   * @private
   */
  private getHost() {
    return window.location.href.replace(window.location.hash, '')
  }

  /**
   * 微信页面初始化监听
   */
  wechatConfigListener():Promise<any> {
    return new Promise((resolve, reject) => {
      wx.ready(resolve)
      wx.error(reject)
    })
  }

  /**
   * 初始化页面微信JDK配置
   */
  initWxConfigByPage(wechatAuthConfig: wechatAuthConfig):Promise<any> {
    wx.config({
      ...wechatAuthConfig,
      appId: this.wechatConfig.appId,
      debug: this.wechatConfig.debug
    })
    return this.wechatConfigListener()
  }

  /**
   * 访问微信授权链接
   */
  openWechatAuth():void {
    const authParams = {
      appid: this.wechatConfig.appId,
      redirect_uri: this.wechatConfig.redirectUri,
      response_type: this.wechatConfig.responseType || 'code',
      scope: this.wechatConfig.scope || 'snsapi_userinfo',
      state: this.wechatConfig.state || 1
    }
    window.location.href = `${this.WECHAT_AUTH_URL}?${toParams(authParams)}`
  }

  /**
   * 调起支付
   * @param params
   */
  pay(params: any):Promise<any> {
   return new Promise((resolve, reject) => {
     wx.chooseWXPay({
       ...params,
       success: (res: any) => {
         if (res.err_msg === WechatStatus.PAY_STATUS_OK) {
           resolve(res)
         } else {
           reject(res)
         }
       }
     })
   })
  }

  install (app: any):void {
    app.config.globalProperties.$wx = this.instance
  }
}
