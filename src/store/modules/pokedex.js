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
        console.log(pokemon);
        state.pokemon = pokemon
    }
}
export const actions = {
    getPokedex({commit}, name){
      pokemonService.getPokedex(name).then(response => {
        commit('SET_POKEDEX', response.data)
      }).catch(error =>{
        console.log(error);
      })
    }
}