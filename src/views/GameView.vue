<template>
    <div class="container">
        <PokemonWTP :show="this.show" :url="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'"/>
        <PokemonOptions @click="getAnswer" :options="options"/>
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
                this.$store.dispatch('game/newGame', randomList)
                .catch(error =>{
                    const notification = {
                    type: 'error',
                    message: 'There was a problem fetching options: ' + error.message
                    }
                    store.dispatch('notification/add', notification, { root: true })
                })
                nProgress.done()

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
                this.show = true
                console.log(e.target);

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

</style>