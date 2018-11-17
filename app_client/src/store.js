import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  // plugins: [
  //   createPersistedState()
  // ],
  state: {
    hideToolbar: false,
    alerts: null,
    token: null,
    user: null,
    isUserLogin: false
  },
  mutations: {
    setHideToolbar (state, hideToolbar) {
      state.hideToolbar = hideToolbar
    },
    setAlert (state, alert) {
      state.alerts = alert
    },
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
      state.isUserLogin = user ? true : null
    }
  },
  actions: {
    setHideToolbar ({ commit }, hideToolbar) {
      commit('setHideToolbar', hideToolbar)
    },
    setAlert ({ commit }, alert) {
      commit('setAlert', alert)
    },
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  }
})
