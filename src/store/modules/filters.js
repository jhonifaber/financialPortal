const state = {
    selectedCurrency: 'All',
    selectedFamily: 'All',
    selectedFilter: 'CurrencyTab',
}

const getters = {
    selectedCurrency(state) {
        return state.selectedCurrency
    },
    selectedFamily(state) {
        return state.selectedFamily
    },
    selectedFilter(state) {
        return state.selectedFilter
    },
}

const mutations = {
    updateSelectedCurrency(state, payload) {
        state.selectedCurrency = payload
    },
    updateSelectedFamily(state, payload) {
        state.selectedFamily = payload
    },
    saveSelectedFilter(state, payload) {
        state.selectedFilter = payload
    },
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}