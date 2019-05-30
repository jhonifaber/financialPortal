import { BASE_URL } from "./../../axios/axios.js"

const state = {
    funds: [],
    filteredFunds: [],
    cardsData: [],
    currentPage: {}
}

const getters = {
    funds(state) {
        return state.funds
    },
    filteredFunds(state) {
        return state.filteredFunds
    },
    cardsData(state) {
        return state.cardsData;
    },
    currentPage(state) {
        return state.currentPage
    }

}

const mutations = {
    saveFunds(state, payload) {
        state.funds = payload
        state.filteredFunds = payload
    },
    saveFiltered(state, payload) {
        state.filteredFunds = payload
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
}

const actions = {
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

export default {
    state,
    getters,
    mutations,
    actions
}