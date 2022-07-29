import { putWarehouse } from '@/api/manage-base-info'

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
  actions: {
    async editWarehouse (context, user) {
      const res = await putWarehouse(user)
      // console.log(res)
      context.commit('editlists', res.data.data)
    }
  }
}
