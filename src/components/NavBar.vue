<template>
    <div class="topnav">
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'pokedex'}">Pokedex</router-link>
        <router-link :to="{name:'game'}">Game</router-link>
    </div>
</template>

<script>
    export default {
        name:'NavBar'
    }
</script>

<style scoped>


.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: var(--red);
  color: white;
}
</style>