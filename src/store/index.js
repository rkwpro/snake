import { createStore } from 'vuex'

export default createStore({
  state: {
    score : 0,
    record : 0,
    restart : true,
  },
  getters: {
  },
  mutations: {
    updateScore:(state,score) => {
      state.score = score;
    },
    updateRecord:(state,score) => {
      if(state.record < score)

      state.record = score;
    },
    updateRestart:(state,restart) => {
      state.restart = restart;
    },

  },
  actions: {
  },
  modules: {
  }
})
