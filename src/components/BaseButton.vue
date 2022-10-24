<template>
    <button v-on="$listeners" :class="typeClass" v-bind="$attrs">
        <slot>
        </slot>
    </button>
</template>

<script>
    export default {
        props: {
            typeClass:{
                type: String,
                default: 'red'
            }
        },
    }
</script>

<style lang="scss" scoped>
button{
    margin:2px;
    cursor: default;
    height: 40px;
    outline: 0;
    color: #fff;
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 18px;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                
}
button:hover{
    color: #fff;
}
.red{
    background-color: var(--red);
}
.red:hover{
    background-color: var(--red-hover);
    cursor:pointer;
}
.green{
    background-color: rgb(0, 214, 0);
}
.gray{
    background-color: gray;
}
.blue{
    background-color: gray;
    cursor:pointer;
    background-color: #0d6efd;
    border-color: #0d6efd;
    
}
.blue:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
}
</style>