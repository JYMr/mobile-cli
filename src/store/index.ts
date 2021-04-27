import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.token || ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      sessionStorage.setItem('token', token)
    }
  },
  getters: {
    /**
     * 登录状态
     * @param state
     * @constructor
     */
    LOGIN_STATUS(state) {
      return !!state.token
    }
  },
  actions: {
  },
  modules: {
  }
})
