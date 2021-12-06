

<template>
  <div id="app">
    <plant-header></plant-header>
    <plant-navibar></plant-navibar>

    <plant-search></plant-search>

    <plant-footer></plant-footer>
  </div>
</template>

<script>
import PlantSearchBar from './components/main/PlantSearchBar.vue'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
// import ErrorPage from './components/errorPage.vue'

export default {
  name: 'App',
  components: {
    'plant-header' : Header,
    'plant-navibar': NavigationBar,
    'plant-search' : PlantSearchBar,
    'plant-footer' : Footer,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
