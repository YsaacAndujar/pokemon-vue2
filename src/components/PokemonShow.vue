<template>
    <div class="container">
        <h1>{{pokemon.name | upper}}</h1>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <h2>{{pokemon.order}}</h2>
        <div class="types-container">
            <span v-for="type in pokemon.types"><BaseTypeBadge :type="type.type.name"></BaseTypeBadge></span>
        </div>
    </div>
</template>

<script>
import BaseTypeBadge from './BaseTypeBadge.vue';
    export default {

    computed: {
        pokemon(){
            return this.$store.getters['pokedex/pokemon']
        }
    },
    components: { BaseTypeBadge },
    filters:{
        upper(value){
            return value.toUpperCase()
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    display:flex;
    flex-direction: column;
    text-align: center;
}

.types-container{
    display: grid;
    grid-template-columns: 130px 130px;
    justify-content: center;
    row-gap: 10px;
}
</style>