import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    kahoots:[],
    apiLink: 'https://opentdb.com/api.php?amount=10&type=multiple',
  },
  mutations: {
    SET_KAHOOTS(state, apiKahoots){
      state.kahoots = apiKahoots
    },
    
  },
  actions: {
    getKahoots({ commit }){
      Axios.get(this.state.apiLink)
           .then(response => {
             commit('SET_KAHOOTS', response.data.results)
           })
    },
  
  },
  modules: {
  }
})


