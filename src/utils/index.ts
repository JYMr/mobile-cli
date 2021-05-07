
/**
 * 转换obj为params字符串
 * @param obj
 */
export const toParams = (obj: any): string => {
  let str = ''
  for (const key in obj) {
    if (str !== '') {
      str += '&'
    }
    str += key + '=' + encodeURIComponent(obj[key])
  }
  return str
}
