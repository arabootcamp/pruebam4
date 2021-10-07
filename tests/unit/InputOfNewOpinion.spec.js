import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import GamesTable from '@/components/GamesTable.vue'
import {BModal,BFormInput,BButton,BFormGroup} from "bootstrap-vue"

const localVue = createLocalVue();
localVue.use(Vuex);

describe('GamesTable.vue', () => {

  let getters;
  let actions;
  let store;


  beforeEach(() => {
    getters = {
      getLoading: () => false,
      getErrored: () => false,
      getData: () => null,
    }

    actions = {
      setGamesOpinions: jest.fn()
    };

    store = new Vuex.Store({
      getters,
      actions
    })
  });

  it('Ingreso de una nueva opinión', () => {
    const wrapper = mount(GamesTable, {
      store,
      localVue
    });

    console.log(wrapper.find('h2').html());
    expect(wrapper.find('h2').text()).toContain('PRUEBA01')

    console.log(wrapper.findComponent(BButton).text())
    expect(wrapper.findComponent(BButton).exists()).toBeTruthy();

console.log(wrapper.html())
   expect(wrapper.find('#name-input').exists()).toBeTruthy(); 



    /*
    const name = wrapper.find('#name-input');
    const text = wrapper.find('#opinion-input');
  
    console.log(wrapper)
    console.log('---------------')

    
    name.element.value='Charles Francis Xavier';
    text.element.value='Charles Francis Xavier, ​ también llamado Profesor X, es un superhéroe perteneciente al Universo Marvel.';
    console.log(name.element.value)
    console.log(text.element.value)
  
*/
  })
})