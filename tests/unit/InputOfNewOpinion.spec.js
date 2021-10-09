//import Vue from 'vue';
import {createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex';
import store from '@/store/index';

const localVue = createLocalVue()

describe('Prueba al store', () => {
  beforeAll(() => {
    localVue.use(Vuex)
    store = new Vuex.Store(store);
  });
});

describe('Prueba al store', () => {

  it('Ingreso de una nueva opinión', () => {

    const newOpinion = {
      id: 3328,
      gameName: "The Witcher 3: Wild Hunt",
      personName: "Lucis",
      personOpinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed, ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed, ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis sed."
    }
    store.dispatch('setGamesOpinions', newOpinion)
    expect(store.getters.getGamesOpinions).toHaveLength(1)
  });

  it('Edición de una opinión agregada', () => {
    let edit = 'Lorem editado'
    const editOpinion = {
      index: 0,
      personName: "Lucis",
      personOpinion: edit
    }
    store.dispatch('editOpinion', editOpinion);
    expect(store.getters.getGamesOpinions[0]).toHaveProperty('personOpinion', edit);
    expect(store.getters.getGamesOpinions[0]).toHaveProperty('id', 3328);
  });

  it('eliminar opinion', () => {
    const index = 0;
    store.dispatch('deleteOpinion', index);
  });
})