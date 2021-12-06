<template>
  <div id="app">
   <Header></Header>
   <NavigationBar></NavigationBar>
   <PlantRegister></PlantRegister>
   <MyplantList></MyplantList>
   <FollowerPlantList></FollowerPlantList>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import FollowerPlantList from './components/main/FollowerPlantList.vue'
import Header from './components/Header.vue'
import MyplantList from './components/main/MyplantList.vue'
import PlantRegister from './components/main/PlantRegister.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    FollowerPlantList,
    Header,
    MyplantList,
    PlantRegister,
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
