<template>
    <div class="container">
        <BaseButton 
            v-for="{id, type, name} in options"
            :key="id"
            :id="id"
            v-on="$listeners"
            :typeClass="type"
        >{{name.toUpperCase()}}</BaseButton>
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