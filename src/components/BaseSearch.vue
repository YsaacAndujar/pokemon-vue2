<template>
    <div class="container">
        <BaseInput :placeholder="inputHolder" v-on:update="update"></BaseInput>
        <BaseButton v-on="$listeners">{{buttonHolder}}</BaseButton>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: ''
        }
    },
    methods:{
        update(value){
            this.$emit('update',value)
        }
    },
    props: {
        inputHolder: {
            type: String,
            default: 'Pokemon name'
        },
        buttonHolder: {
            type: String,
            default: 'Search'
        },
    },
    
}
</script>

<style scoped>
.container{
    display:flex;
}
</style>