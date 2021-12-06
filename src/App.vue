<template>
  <div id="app">
    <!-- <plant-header></plant-header>
    <br /><br /><br />
    <plant-navibar></plant-navibar>
    <br /><br />
    <hr size="5px" />
    <plant-register></plant-register>
    <plant-mylist></plant-mylist>

    <br /><br /><br />
    <plant-followrlist></plant-followrlist>
    <br /><br />
    <hr size="5px" />
    <plant-search></plant-search>
    <br><br><br>
    <plant-resultlist></plant-resultlist>
    <plant-footer></plant-footer> -->
  <modal></modal>

  </div>
</template>

<script>
// import PlantSearchBar from "./components/main/PlantSearchBar.vue";
// import NavigationBar from "./components/NavigationBar.vue";
// import FollowerPlantList from "./components/main/FollowerPlantList.vue";
// import MyplantList from "./components/main/MyplantList.vue";
// import PlantRegister from "./components/main/PlantRegister.vue";
// import Footer from "./components/Footer.vue";
// import Header from "./components/Header.vue";
// import PlantResultList from "./components/main/PlantResultList.vue";
// import ErrorPage from './components/errorPage.vue'
import modal from './components/myplant/modal.vue'

export default {
  name: "App",
  components: {
    // "plant-header": Header,
    // "plant-navibar": NavigationBar,
    // "plant-register": PlantRegister,
    // "plant-mylist": MyplantList,
    // "plant-followrlist": FollowerPlantList,
    // "plant-search": PlantSearchBar,
    // "plant-resultlist": PlantResultList,
    // "plant-footer": Footer,
  "modal":modal,

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: block

}
hr {
  background-color: #009900;
}

body {
  /* text-align: center; */
  background-color: #f6f6f6;
  margin-top: 0px;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  color: #2c3e50;
  margin-top: 0px;
  display: block;

}


</style>
