import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'src/store/mutations'
import actions from 'src/store/actions'
import getters from 'src/store/getters'
import auth from 'src/store/modules/auth'
import example from 'src/store/modules/layout'

let context = require.context('./modules', true, /\.(js)$/)
let files = context.keys().map(context).map(file => file.default)
console.log(files)

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {
    auth: auth,
    example: example
  }
})
