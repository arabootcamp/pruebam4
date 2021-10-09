import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiLoading: true,
    apiErrored: false,
    apiData: [],
    gamesOpinions: []
  },
  getters: {
    getLoading: state => state.apiLoading,
    getErrored: state => state.apiErrored,
    getData: state => state.apiData,
    getGamesOpinions: state => state.gamesOpinions,
    getOneGamesOpinion: state => index => state.gamesOpinions[index],
  },
  mutations: {
    setApiData: (state, data) => {
      state.apiData.length=0;
      data.results.forEach(el => {
        let reverseReleased = el.released.split('-').reverse().join('-');
        let reverseUpdate = el.updated.split('T')[0].split('-').reverse().join('-');
        state.apiData.push({
          id: el.id,
          background_image: el.background_image,
          name: el.name,
          rating: el.rating,
          released: reverseReleased,
          updated: reverseUpdate
        })
      });
    },
    setGamesOpinions: (state, payload) => {
      state.gamesOpinions.unshift(payload);
      console.log('action->commit setGamesOpinions realizado');
    },
    deleteOpinion: (status, index) => {
      status.gamesOpinions.splice(index, 1);
    },
    editOpinion:(state,payload)=>{
      state.gamesOpinions[payload.index].personName=payload.personName;
      state.gamesOpinions[payload.index].personOpinion=payload.personOpinion;
      console.log("action->commit editOpinion realizado, index ..."+payload.index)
    }
  },
  actions: {
    dataLoad({
      state,
      commit
    }) {
      const URL = 'https://api.rawg.io/api/games';
      const API_KEY = '?key=' + process.env.VUE_APP_API_KEY;

      fetch(URL + API_KEY)
        .then((response) => response.json())
        .then((data) => {
          commit('setApiData', data)
        })
        .catch((err) => {
          console.log('Error en consulta API: ' + err);
          state.apiErrored = true;
        })
        .finally(() => {
          state.apiLoading = false;
          console.log('Saliendo de la consulta a la API');
        })
    },
    setGamesOpinions({
      commit
    }, payload) {
      commit('setGamesOpinions', payload);
    },
    deleteOpinion({
      commit
    }, index) {
      commit('deleteOpinion', index);
    },
    editOpinion({
        commit
      }, payload){
        commit('editOpinion',payload);
      }
  },
  modules: {},
  plugins: [createPersistedState()]
})