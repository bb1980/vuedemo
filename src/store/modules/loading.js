import * as types from '@/store/mutation-types'

const getters = {
  isLoading: (state) => state.isLoading
}

const actions = {
}

const mutations = {
  [types.IS_LOADING](state, isLoading) {
    state.isLoading = isLoading
  },
}

const state = {
  isLoading: false
}

export default {
  state,
  getters,
  actions,
  mutations
}
