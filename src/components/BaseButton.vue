<template>
    <button>
        <slot>
        </slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
button{
    margin:2px;
    height: 40px;
    cursor: pointer;
    outline: 0;
    color: #fff;
    background-color: var(--red);
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                
}
button:hover{
    color: #fff;
    background-color: var(--red-hover);
}
</style>