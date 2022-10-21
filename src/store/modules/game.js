import pokemonService from '@/services/pokemonService.js'

export const namespaced = true

export const state = {
    pokemon:null,
    options:null,
    numbers: [...Array(899).keys()].slice(1)
}

export const getters = {
    pokemon: state =>{
      return state.pokemon
    },
    options: state =>{
        return state.options
    },
    numbers: state => {
        return state.numbers
    }
}
export const mutations = {
    SET_OPTIONS(state, options){
        state.options = options
    },
    SET_POKEMON(state, pokemon){
        state.pokemon = pokemon
    }
}
export const actions = {
    async getPokemons({commit}, numbers){
        let data = numbers.map(async (n)=>{
            (await pokemonService.getPokedex(n)).data
        });
      return data
    }
}