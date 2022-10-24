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
    async setAnswer(_, clicked){
        state.options.map((option)=>{
            if(option.id != clicked){
                option.type = 'gray'
            }else{
                option.type = 'red'
            }
            
            if(state.pokemon == option){
                option.type = 'green'
            }
            return option
        })
    }
}