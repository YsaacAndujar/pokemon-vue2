<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="router-view-container">
      <router-view/>


    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
    export default {
    components: NavBar,
    components: { NavBar }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.router-view-container{
  display:flex;
  justify-content: center;
  padding: 20px 1px;
}
</style>
