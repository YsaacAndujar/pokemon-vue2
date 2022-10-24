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
        const options = await Promise.all(
            numbers.map(async (n)=>{
                return (await pokemonService.getPokedex(n)).data
            })
        )
        const n = Math.floor(Math.random() * options.length)
        commit('SET_POKEMON', options[n])
        commit('SET_OPTIONS', options)
        return options
    },
    async setAnswer({commit}, answer){
        console.log(state.pokemon);
        commit('SET_OPTIONS', state.options.map((e)=>{
            e.type = state.pokemon != e ? 'gray' : 'green' 
            return e
        }))
    }
}