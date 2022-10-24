import pokemonService from '@/services/pokemonService.js'

export const namespaced = true

export const state = {
    pokemon:null,
    options:[],
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
    async newGame({commit}, numbers){
        const pokemons = await Promise.all(
            numbers.map(async (n)=>{
                return (await pokemonService.getPokedex(n)).data
            })
        )
        const n = Math.floor(Math.random() * pokemons.length)
        commit('SET_POKEMON', pokemons[n])
        commit('SET_OPTIONS', pokemons)
        
        return pokemons
    }
}