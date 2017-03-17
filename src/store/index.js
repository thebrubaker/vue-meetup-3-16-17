import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'src/store/mutations'
import actions from 'src/store/actions'
import getters from 'src/store/getters'
import { getFilenames, importDirectory } from 'utilities'

const directory = require.context('./modules', true, /\.js$/)
const imports = directory.keys().map(directory)

// import all files in the the event directory
let filenames = getFilenames(directory)
let modules = importDirectory(imports, filenames)

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules
})
