<template>
    <div>
        <BaseSearch v-on:update="update" @click="search" ></BaseSearch>
        <PokemonShow v-if="this.$store.getters['pokedex/pokemon']"></PokemonShow>
    </div> 
</template>

<script>
import PokemonShow from '@/components/PokemonShow.vue';
export default {
    data(){
        return {
            name,
        }
    },
    components: { PokemonShow },
    methods:{
        update(name){
            this.name = name
        },
        search(){
            this.$store.dispatch('pokedex/getPokedex', this.name)
        }
    },
}
</script>

<style scoped>

</style>