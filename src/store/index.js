import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'src/store/mutations'
import actions from 'src/store/actions'
import getters from 'src/store/getters'
import { getFilenames, importDirectory } from 'utilities'

let context = require.context('./modules', true, /\.(js)$/)
let directory = context.keys().map(context).map(file => file.default)

let filenames = getFilenames(directory)
let modules = importDirectory(imports, filenames)

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules
})
