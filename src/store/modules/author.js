import * as types from '@/store/mutation-types'
import api from '@/services/api/author'

const getters = {
  author: (state) => state.author
}

const actions = {
  getAuthor({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .getAuthor(payload)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data)
          }
        })
        .catch((error) => {

        })
    })
  },

}

const mutations = {
  [types.AUTHOR](state, author) {
    state.author = author
  },
}

const state = {
  author: null
}

export default {
  state,
  getters,
  actions,
  mutations
}
