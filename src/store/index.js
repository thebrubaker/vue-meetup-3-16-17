import mutations from 'store/mutations'
import actions from 'store/actions'
import getters from 'store/getters'
import auth from 'store/modules/auth'
import example from 'store/modules/example'

export default new Vuex({
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {
    auth: auth,
    example: example
  }
})
