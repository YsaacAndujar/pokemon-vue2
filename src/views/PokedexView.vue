<template>
    <div>
        <BaseSearch v-on:update="update" @click="search" ></BaseSearch>
        <PokemonShow></PokemonShow>
    </div> 
</template>

<script>
import PokemonShow from '@/components/PokemonShow.vue';
import pokemonService from '@/services/pokemonService.js'
export default {
    data(){
        return {
            value: '',
        }
    },
    components: { PokemonShow },
    methods:{
        update(value){
            this.value = value
        },
        search(){
            pokemonService.getPokedex(this.value).then((response)=>{
                console.log(this.pokemon);
            })
        }
    },
}
</script>

<style scoped>

</style>