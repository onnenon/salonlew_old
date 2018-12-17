<template>
  <div id="app">
    <TopBar id="TopBar"/>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TopBar
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2d2d;
  min-width: 320px;
}
body {
  margin: 0;
}
@media screen and (max-width: 770px) {
  #TopBar {
    display: none;
  }
}
</style>
