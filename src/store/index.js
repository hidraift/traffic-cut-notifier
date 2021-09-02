import { createStore } from 'vuex'

export default createStore({
  state: {
    cuts: []
  },
  mutations: {
    setCuts(state, arrCuts){
      state.cuts = arrCuts
    }
  },
  actions: {
    initCuts({ commit }, arrCuts){
      commit('setCuts', arrCuts)
    }
  },
  modules: {
  }
})
