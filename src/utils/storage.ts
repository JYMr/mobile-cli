/**
 * sessionStorage
 * @type {Object}
 */
export const session = {
  clear ():void {
    return sessionStorage.clear()
  },
  set (key:string, value:string):void {
    sessionStorage.setItem(key, value)
  },
  get (key:string, cache = true) {
    let value = sessionStorage.getItem(key)
    if (!value) return null

    try {
      value = JSON.parse(value)
    } catch (err) {}
    if (!cache) {
      sessionStorage.removeItem(key)
    }
    return value
  },
  remove (key:string):void {
    sessionStorage.removeItem(key)
  },
  removeLike (key:string):void {
    Object.keys(window.sessionStorage).forEach(k => {
      k.indexOf(key) > -1 && this.remove(k)
    })
  }
}
/**
 * localStorage
 * @type {Object}
 */
export const local = {
  clear () {
    return localStorage.clear()
  },
  set (key:string, value:string) {
    return localStorage.setItem(key, value)
  },
  getString (key:string) {
    return localStorage.getItem(key)
  },
  get (key:string, cache = true) {
    const v = localStorage.getItem(key)
    if (!cache) {
      localStorage.removeItem(key)
    }
    return v || null
  },
  remove (key:string) {
    return localStorage.removeItem(key)
  },
  removeLike (key:string) {
    Object.keys(window.localStorage).forEach(k => {
      k.indexOf(key) > -1 && this.remove(k)
    })
  }
}
