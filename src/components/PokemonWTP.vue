<template>
    <div class="container">
        <img class="pokemon-show" 
            :src="url"
            v-if="show"
        >
        <img class="pokemon-shadow" :src="url">
        <img class="background" src="@/assets/images/whosthatpokemon.webp">
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            url: {
                type:String,
                required: true
            },
        },
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