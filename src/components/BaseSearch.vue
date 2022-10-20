<template>
    <div class="container">
        <BaseInput :placeholder="inputHolder"></BaseInput>
        <BaseButton>{{buttonHolder}}</BaseButton>
    </div>
</template>

<script>
export default {
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