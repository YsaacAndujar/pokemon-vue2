<template>
    <div>
        <BaseSearch></BaseSearch>{{k}}
        <PokemonShow></PokemonShow>
    </div> 
</template>

<script>
import PokemonShow from '@/components/PokemonShow.vue';
export default {
    components: { PokemonShow }
}
</script>

<style scoped>

</style>