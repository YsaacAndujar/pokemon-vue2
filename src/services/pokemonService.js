import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-type': 'application/json' 
    }
})

export default {
    async getPokedex(pokemon){
        return api.get(`/${pokemon}`)
    }
}