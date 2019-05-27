import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: [],
    filteredFunds: [],
    selectedCurrency: 'All',
    selectedFamily: 'All'
  },
  getters: {
    funds(state) {
      return state.funds
    },
    filteredFunds(state) {
      return state.filteredFunds
    },
    selectedCurrency(state) {
      return state.selectedCurrency
    },
    selectedFamily(state) {
      return state.selectedFamily
    }
  },
  mutations: {
    saveFunds(state, payload) {
      state.funds = payload
      state.filteredFunds = payload
    },
    saveFiltered(state, payload) {
      state.filteredFunds = payload
    },
    updateSelectedCurrency(state, payload) {
      state.selectedCurrency = payload
    },
    updateSelectedFamily(state, payload) {
      state.selectedFamily = payload
    }
  },
  actions: {
    async fetchFunds(context) {
      const response = await axios.get("http://jsonstub.com/etsfintech/symbols", {
        headers: {
          'Content-Type': 'application/json',
          'JsonStub-User-Key': '9facef2e-9583-4a83-9f08-c87159f1c113',
          'JsonStub-Project-Key': '6ed070c1-b334-4612-8fa8-169c5e45baef'
        },
        data: {}
      })
      context.commit('saveFunds', response.data)
    }


  }
})
