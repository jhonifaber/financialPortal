import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: [],
    filteredFunds: [],
    selectedCurrency: 'All',
    selectedFamily: 'All',
    selectedFilter: 'CurrencyTab',
    cardsData: [],
    currentPage: ''
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
    },
    selectedFilter(state) {
      return state.selectedFilter
    },
    cardsData(state) {
      return state.cardsData;
    },
    currentPage(state) {
      return state.currentPage
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
    },
    saveSelectedFilter(state, payload) {
      state.selectedFilter = payload
    },
    saveFundData(state, payload) {
      state.cardsData = [payload]
    },
    updateCurrentPage(state, payload) {
      let index = state.funds.findIndex(element => element.id == payload)
        let cardInfo = {
          index : index,
          id : payload
        }
      state.currentPage = cardInfo
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
    },
    async fetchSpecificFundInformation(context, payload) {
      const cardID = payload
      const response = await axios.get(`http://jsonstub.com/etsfintech/symbols/${cardID}`, {
        headers: {
          'Content-Type': 'application/json',
          'JsonStub-User-Key': '9facef2e-9583-4a83-9f08-c87159f1c113',
          'JsonStub-Project-Key': '6ed070c1-b334-4612-8fa8-169c5e45baef'
        },
        data: {}
      })
      console.log(response.data);
      context.commit('saveFundData', response.data)
    }
  }
})
