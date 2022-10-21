<template>
    <div class="container">
        <img class="pokemon-show" 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            
        >
        <img class="pokemon-shadow" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
        <img class="background" src="@/assets/images/whosthatpokemon.webp">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.container{
    position: relative;
    height: 300px;
    width: 500px;
    .pokemon-show, .pokemon-shadow {
        top: 50px;
        left: 40px;
        width: 200px;
        position: absolute;
    }
    .pokemon-show {
        z-index: 2;
    }
    .pokemon-shadow {
        filter: contrast(0%) brightness(0%);
        z-index: 1;
    }
    .background{
        position: absolute;
        width: 100%;
    }
}
</style>