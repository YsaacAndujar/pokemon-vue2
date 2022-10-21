import pokemonService from '@/services/pokemonService.js'

export const namespaced = true

export const state = {
    pokemon:undefined
}

export const getters = {
    pokemon: state =>{
      return state.pokemon
    }
}
export const mutations = {
    SET_POKEDEX(state, pokemon){
        state.pokemon = pokemon
    }
}
export const actions = {
    async getPokedex({commit, dispatch}, name){
      let data = (await pokemonService.getPokedex(name)).data
      commit('SET_POKEDEX', data)
      // .then(response => {
      //   commit('SET_POKEDEX', response.data)
      // })
      // .catch(error =>{
      //   const notification = {
      //     type: 'error',
      //     message: 'There was a problem fetching pokemon: ' + error.message 
      //   }
      //   dispatch('notification/add', notification, { root: true })
      //   console.log(error);
      // })
    }
}