/**
 * 浏览器相关方法
 */
class Browser {
  instance: Browser|null = null
  userAgent = ''

  constructor() {
    if (this.instance) {
      return this.instance
    }
    this.instance = this

    this.userAgent = navigator.userAgent.toLowerCase()
  }

  /**
   * 匹配浏览器UserAgent
   * @param reg
   * @private
   */
  private matchUserAgent(reg: RegExp): boolean {
    if (this.userAgent) {
      const match = this.userAgent.match(reg)
      return !!match && !!match.length
    }
    return false
  }

  /**
   * 判断是否为微信浏览器
   */
  public isWeChat(): boolean {
    return this.matchUserAgent(/MicroMessenger/i)
  }

  /**
   * 判断是否为IOS浏览器
   */
  public isIos(): boolean {
    return this.matchUserAgent(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }

  /**
   * 判断是否为Android浏览器
   */
  public isAndroid(): boolean {
    return this.matchUserAgent(/(Android)|(Adr)/)
  }
}

export default new Browser()
