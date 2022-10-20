<template>
    <div>
        <BaseSearch v-on:update="update" @click="btnClick"></BaseSearch>
        <PokemonShow></PokemonShow>
    </div> 
</template>

<script>
import PokemonShow from '@/components/PokemonShow.vue';
export default {
    components: { PokemonShow },
    methods:{
        update(value){
            alert(value)
        },
        btnClick(){
            alert('a')
        }
    },
}
</script>

<style scoped>

</style>