

<template>
  <div id="app">
    <plant-header></plant-header>
    <plant-navibar></plant-navibar>
    <plant-register></plant-register>
    <plant-mylist></plant-mylist>
    <plant-followrlist></plant-followrlist>
    <hr>
    <plant-search></plant-search>
    <br><br><br>
    <plant-resultlist></plant-resultlist>
    <plant-footer></plant-footer>
  </div>
</template>

<script>
import PlantSearchBar from './components/main/PlantSearchBar.vue'
import NavigationBar from './components/NavigationBar.vue'
import FollowerPlantList from './components/main/FollowerPlantList.vue'
import MyplantList from './components/main/MyplantList.vue'
import PlantRegister from './components/main/PlantRegister.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import PlantResultList from './components/main/PlantResultList.vue'
// import ErrorPage from './components/errorPage.vue'

export default {
  name: 'App',
  components: {
    'plant-header' : Header,
    'plant-navibar': NavigationBar,
    'plant-register' : PlantRegister,
    'plant-mylist' : MyplantList,
    'plant-followrlist' : FollowerPlantList,
    'plant-search' : PlantSearchBar,
    'plant-resultlist' : PlantResultList,
    'plant-footer' : Footer,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: block;

}


</style>
