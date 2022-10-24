import pokemonService from '@/services/pokemonService.js'

export const namespaced = true

export const state = {
    pokemon:undefined,
}

export const getters = {
    pokemon: state =>{
      return state.pokemon
    },
}
export const mutations = {
    SET_POKEDEX(state, pokemon){
        state.pokemon = pokemon
    }
}
export const actions = {
    async getPokedex({commit}, name){
      let data = (await pokemonService.getPokedex(name)).data
      commit('SET_POKEDEX', data)
    },
}