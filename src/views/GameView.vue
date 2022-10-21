<template>
    <div class="container">
        <PokemonWTP/>
        <PokemonOptions/>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonWTP from '@/components/PokemonWTP.vue'
    export default {
        components:{
            PokemonOptions,
            PokemonWTP
        },
        data(){
            return {
                vb:false
            }
        },
        methods:{
            test(){
                this.vb = true
            }
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