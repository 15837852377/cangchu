import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import mangeBase from './modules/mangeBase'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    login: login,
    mangeBase: mangeBase
  }
})
