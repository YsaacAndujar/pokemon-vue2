import Vue from 'vue'
import Vuex from 'vuex'
import * as pokedex from '@/store/modules/pokedex.js'
import * as notification from '@/store/modules/notification.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    pokedex,
    notification
  },
})
