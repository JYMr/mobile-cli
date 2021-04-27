/**
 * 前置函数
 */
import Browser from '@/utils/browser'

export const beforeInit = () => {
  return new Promise((resolve, reject) => {
    if (Browser.isWeChat()) {
      console.log('w')
    } else {
      console.log('c')
    }
    resolve(2)
  })
}
