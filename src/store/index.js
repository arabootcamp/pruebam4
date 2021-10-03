import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiLoading: true,
    apiErrored: false,
    apiData: [],
    gamesOpinions: [{
        id: 5286,
        gameName: "Tomb Raider (2013)",
        personName: "Melissa",
        personOpinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed, itaque doloremque ratione tempore eos harum laudantium molestias cupiditate praesentium ipsa beatae quod blanditiis tenetur quasi! Sit, nihil porro?'
      },
      {
        id: 5286,
        gameName: "Tomb Raider (2013)",
        personName: "Cristina",
        personOpinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed,"
      },
      {
        id: 3498,
        gameName: "Grand Theft Auto V",
        personName: "Roberto",
        personOpinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed, ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed."
      },
      {
        id: 3328,
        gameName: "The Witcher 3: Wild Hunt",
        personName: "Lucis",
        personOpinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed, ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed, ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed."
      }
    ]
  },
  getters: {
    getLoading: state => state.apiLoading,
    getErrored: state => state.apiErrored,
    getData: state => state.apiData,
    getGamesOpinions: state => state.gamesOpinions,
  },
  mutations: {
    setApiData: (state, data) => {
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
    deleteOpinion:(status, index) =>{
      status.gamesOpinions.splice(index,1);
    }
  },
  actions: {
    dataLoad({
      state,
      commit
    }) {
      const URL = 'https://api.rawg.io/api/games55555';
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
      commit('deleteOpinion', index)
    }
  },
  modules: {}
})