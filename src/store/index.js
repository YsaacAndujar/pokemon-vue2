import Vue from 'vue'
import Vuex from 'vuex'
import * as pokedex from '@/store/modules/pokedex.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    pokedex
  },
  state: {
    pokemon: {
      name:'d',
      sprites:{
          front_default:'...',
      },
      order: 1,
      types:[{type:{name:'fire'}}]
  }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
