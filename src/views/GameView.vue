<template>
    <div class="container">
        <PokemonWTP :show="this.show"/>
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
        beforeMount(){
            nProgress.start()
            this.nextPokemon()
        },
        methods:{
            asyncnextPokemon(){
                const numbers = store.getters['game/numbers']
                
            
            this.$store.dispatch('pokedex/getPokedex', this.name)
            .catch(error =>{
                const message = error.response.status == 404 ? 'Wrong pokemon / Bad internet connection' : error.message
                const notification = {
                type: 'error',
                message: 'There was a problem fetching pokemon: ' + message
                }
                this.$store.dispatch('notification/add', notification, { root: true })
            }).finally( () =>{
                nProgress.done()
            })
        },
            getAnswer(){
                this.show = true
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