import Vue from 'vue'
import Vuex from 'vuex'
import funds from "./modules/funds.js"
import filters from "./modules/filters.js"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    funds,
    filters
  }
})
