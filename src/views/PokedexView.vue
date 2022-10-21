<template>
    <div>
        <form @submit.prevent>
            <BaseSearch v-on:update="update" @click="search" ></BaseSearch>
        </form>
        <PokemonShow v-if="this.$store.getters['pokedex/pokemon']"></PokemonShow>
    </div> 
</template>

<script>
import PokemonShow from '@/components/PokemonShow.vue';
import nProgress from 'nprogress'

export default {
    data(){
        return {
            name
        }
    },
    components: { PokemonShow },
    methods:{
        update(name){
            this.name = name
        },
        search(){
            nProgress.start()
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
        }
    },
}
</script>

<style scoped>

</style>