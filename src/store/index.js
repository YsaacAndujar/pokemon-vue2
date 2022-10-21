import Vue from 'vue'
import Vuex from 'vuex'
import * as pokedex from '@/store/modules/pokedex.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    pokedex
  },
})
