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
        user-select: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    }
    .background{
        position: absolute;
        width: 100%;
    }
}
@media (max-width: 600px) {
    .container{
        .pokemon-show, .pokemon-shadow {
            top: 70px;
            left: 40px;
            width: 160px;
        }
    }
}
@media (max-width: 450px) {
    .container{
        .pokemon-show, .pokemon-shadow {
            top: 92px;
            left: 27px;
            width: 120px;
        }
    }
}
</style>