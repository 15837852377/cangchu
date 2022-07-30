export default {
  namespaced: true,
  state: {
    editlist: {}
  },
  mutations: {
    editlists (state, user) {
      state.editlist = user
    }
  },
  actions: {}
}
