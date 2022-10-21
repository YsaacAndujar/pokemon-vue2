<template>
  <div id="app">
    <NavBar></NavBar>
    <NotificationContainer/>
    <div class="router-view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

    export default {
    components: { NavBar,NotificationContainer }
}
</script>

<style>
:root {
  --red: hsl(0, 86%, 51%);
  --red-hover:hsl(0, 86%, 68%);
}
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
