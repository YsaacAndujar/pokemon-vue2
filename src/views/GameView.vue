<template>
    <div class="container">
        <PokemonWTP :show="this.show" :url="pokemon.sprites.front_default" v-if="pokemon"/>
        <PokemonOptions @click="getAnswer" :options="options"/>
        <div class="new-game-container">
            <base-button :typeClass="'blue'" @click="nextPokemon()">NEW POKEMON</base-button>
        </div>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonWTP from '@/components/PokemonWTP.vue'
import nProgress from 'nprogress'
import store from '@/store/index'

    export default {
        computed:{
            pokemon(){
                return this.$store.getters['game/pokemon']
            },
            options(){
                return this.$store.getters['game/options']
            }
        },
        components:{
            PokemonOptions,
            PokemonWTP
        },
        data(){
            return {
                show:false,
            }
        },
        beforeRouteEnter(routeTo, routeFrom, next){
            next(gv =>{
                gv.nextPokemon()
            })
            
        },
        methods:{
            nextPokemon(){
                nProgress.start()
                const numbers = store.getters['game/numbers']
                const randomList = this.getRandomList(4, numbers)
                this.show = false
                this.$store.dispatch('game/newGame', randomList).then(
                    nProgress.done()
                )
                .catch(error =>{
                    const notification = {
                    type: 'error',
                    message: 'There was a problem fetching options: ' + error.message
                    }
                    store.dispatch('notification/add', notification, { root: true })
                    nProgress.done()
                })
            },
            getRandomList(size, list){
                const newList = []
                let n
                for (let i = 0; i < size; i++){
                    n = Math.floor(Math.random() * list.length)
                    newList.push(list.splice(n,1)[0])
                }
                return newList
            },
            getAnswer(e){
                console.log('g');

                this.show = true
                this.$store.dispatch('game/setAnswer', e.target.id)
            },

        }
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.new-game-container{
    margin-top: 20px;
    display: flex;
    justify-content: right;
}
@media (max-width: 600px) {
    .container{
        width: 400px;
    }
}
@media (max-width: 450px) {
    .container{
        width: 300px;
    }
}
</style>