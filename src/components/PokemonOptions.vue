<template>
    <div class="container">
        <BaseButton 
            v-for="option in options"
            :key="option.id"
            :id="option.id"
            v-on="$listeners"
            :typeClass="option.type"
        >{{option.name}}</BaseButton>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>