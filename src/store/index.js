import mutations from 'src/store/mutations'
import actions from 'src/store/actions'
import getters from 'src/store/getters'
import auth from 'src/store/modules/auth'
import example from 'src/store/modules/layout'

export default new Vuex({
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {
    auth: auth,
    example: example
  }
})
