import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funds: [
      {
        "id": 9756,
        "name": "Jpmorgan Investment Funds - Global Macro Opportunities Fund A Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 42736,
        "name": "Allianz Fondsvorsorge 1977-1996 A Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 43722,
        "name": "JB MP Konwave Gold Equity Fund B Acc",
        "currency": "USD",
        "risk_family": "Equity"
      },
      {
        "id": 47868,
        "name": "Invesco Pan European Structured Equity Fund A Acc",
        "currency": "EUR",
        "risk_family": "Equity"
      },
      {
        "id": 57400,
        "name": "Invesco Pan European High Income Fund E Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 62509,
        "name": "Henderson Horizon Pan European Property Equities Fund A2 Acc",
        "currency": "JPY",
        "risk_family": "Equity"
      },
      {
        "id": 65388,
        "name": "Carmignac Patrimoine A Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 78072,
        "name": "Global Stable Equity Fund BI Acc",
        "currency": "EUR",
        "risk_family": "Equity"
      },
      {
        "id": 78178,
        "name": "Stable Return Fund BP Acc",
        "currency": "JPY",
        "risk_family": "Balanced"
      },
      {
        "id": 90690,
        "name": "Janus Global Life Sciences Fund I (acc.) Acc",
        "currency": "USD",
        "risk_family": "Equity"
      }
    ],
    filteredFunds: [
      {
        "id": 9756,
        "name": "Jpmorgan Investment Funds - Global Macro Opportunities Fund A Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 42736,
        "name": "Allianz Fondsvorsorge 1977-1996 A Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 43722,
        "name": "JB MP Konwave Gold Equity Fund B Acc",
        "currency": "USD",
        "risk_family": "Equity"
      },
      {
        "id": 47868,
        "name": "Invesco Pan European Structured Equity Fund A Acc",
        "currency": "EUR",
        "risk_family": "Equity"
      },
      {
        "id": 57400,
        "name": "Invesco Pan European High Income Fund E Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 62509,
        "name": "Henderson Horizon Pan European Property Equities Fund A2 Acc",
        "currency": "JPY",
        "risk_family": "Equity"
      },
      {
        "id": 65388,
        "name": "Carmignac Patrimoine A Acc",
        "currency": "EUR",
        "risk_family": "Balanced"
      },
      {
        "id": 78072,
        "name": "Global Stable Equity Fund BI Acc",
        "currency": "EUR",
        "risk_family": "Equity"
      },
      {
        "id": 78178,
        "name": "Stable Return Fund BP Acc",
        "currency": "JPY",
        "risk_family": "Balanced"
      },
      {
        "id": 90690,
        "name": "Janus Global Life Sciences Fund I (acc.) Acc",
        "currency": "USD",
        "risk_family": "Equity"
      }
    ],
    selectedCurrency : 'All',
    selectedFamily : 'All'
  },
  getters: {
    funds(state) {
      return state.funds
    },
    filteredFunds(state) {
      return state.filteredFunds
    },
    selectedCurrency(state){
      return state.selectedCurrency
    },
    selectedFamily(state){
      return state.selectedFamily
    }
  },
  mutations: {
    saveFiltered(state, payload) {
      state.filteredFunds = payload
    },
    updateSelectedCurrency(state, payload){
      state.selectedCurrency = payload
    },
    updateSelectedFamily(state, payload){
      state.selectedFamily = payload
    }
  },
  actions: {
    async fetchFunds() {
      // const response = await axios.get("http://jsonstub.com/etsfintech/symbols", {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'JsonStub-User-Key': '9facef2e-9583-4a83-9f08-c87159f1c113',
      //     'JsonStub-Project-Key': '6ed070c1-b334-4612-8fa8-169c5e45baef'
      //   }
      // })
      // console.log(response.data);
    }


  }
})
