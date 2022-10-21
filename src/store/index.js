import Vue from 'vue'
import Vuex from 'vuex'
import * as pokedex from '@/store/modules/pokedex.js'
import pokemonService from '@/services/pokemonService.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    pokedex
  },
  state: {
    pokemon:undefined
  },
  getters: {
    pokemon: state =>{
      return state.pokemon
    }
  },
  mutations: {
    SET_POKEDEX(state, pokemon){
      state.pokemon = pokemon
    }
  },
  actions: {
    getPokedex({commit}, name){
      let pokemon
      pokemonService.getPokedex(name).then(response => {
        console.log(response.data);
        pokemon = response.data
        commit('SET_POKEDEX', pokemon)
      }).catch(error =>{
        console.log(error);
      })
    }
  },
})
