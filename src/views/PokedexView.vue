<template>
    <div>
        <BaseSearch v-on:update="update" @click="search" ></BaseSearch>
        <PokemonShow :pokemon="pokemon"></PokemonShow>
    </div> 
</template>

<script>
import PokemonShow from '@/components/PokemonShow.vue';
import pokemonService from '@/services/pokemonService.js'
export default {
    data(){
        return {
            value: '',
            pokemon: {}
        }
    },
    components: { PokemonShow },
    methods:{
        update(value){
            this.value = value
        },
        search(){
            pokemonService.getPokedex(this.value).then((response)=>{
                this.pokemon = response.data
                console.log(this.pokemon);
            })
        }
    },
}
</script>

<style scoped>

</style>