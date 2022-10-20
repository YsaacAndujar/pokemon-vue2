<template>
  <div class="container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" alt="Snorlax">
    <p>Welcome to my website, trainers!</p>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'HomeView',
  components: {
    BaseButton
}
}
</script>

<style scoped>
.container{
  display:block;
}
.container img{
  width: 190px;
  margin: 0 auto;
  display: block;
}

.container p{
  font-size: 20px;
}
</style>
