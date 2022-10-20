<template>
    <input type="text" :placeholder="placeholder">
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String
            },
        },
    }
</script>

<style scoped>
input{
    margin:2px;
    border: 3px solid #000;
    border-radius: 5px;
    height: 40px;
    line-height: normal;
    color: #282828;
    display: block;
    width: 100%;
    box-sizing: border-box;
    user-select: auto;
    font-size: 16px;
    padding: 0 6px;
    padding-left: 12px;
}
input:focus{
    border: 3px solid #5551ff;
} 
</style>