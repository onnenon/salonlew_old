<template>
  <div id="app">
    <TopBar id="TopBar"/>
    <NavBar/>
    <index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import index from "./components/index.vue";
import NavBar from "./components/NavBar.vue";
import TopBar from "./components/TopBar.vue";

export default {
  name: "app",
  components: {
    NavBar,
    TopBar,
    index
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  left: 0;
  top: 0;
  position: absolute;
  min-width: 100vw;
}
@media screen and (max-width: 770px) {
  #TopBar {
    display: none;
  }
}
</style>
