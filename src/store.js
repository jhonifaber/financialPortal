import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_URL } from "./axios/axios.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: [],
    filteredFunds: [],
    selectedCurrency: 'All',
    selectedFamily: 'All',
    selectedFilter: 'CurrencyTab',
    cardsData: [],
    currentPage: {}
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
        index: index,
        id: payload
      }
      localStorage.setItem('currentPage', JSON.stringify(cardInfo));
      state.currentPage = cardInfo
    },
    loadDefaultVariables(state, payload) {
      state.currentPage = payload
    }
  },
  actions: {
    async fetchFunds(context) {
      const response = await BASE_URL.get("/symbols")
      context.commit('saveFunds', response.data)
    },
    async fetchSpecificFundInformation(context, payload) {
      const cardID = payload
      const response = await BASE_URL.get(`/symbols/${cardID}`)
      context.commit('saveFundData', response.data)
    },
    loadDefaultVariables(context) {
      const current_page = JSON.parse(localStorage.getItem("currentPage"));
      context.commit('loadDefaultVariables', current_page)
    }
  }
})
