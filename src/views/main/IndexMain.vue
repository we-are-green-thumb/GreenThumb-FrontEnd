<template>
  <!--  <div id="wrap">-->
  <!--  <div id="header-wrap">-->
  <!--    <div class="header">-->
  <!--      <Header></Header>-->
  <!--    </div>-->
  <!--  </div>-->
  <div id="wrap">
  <div class="container-wrap">
    <!-- <Header/>
    <NavigationBar/>  -->
    <plant-register></plant-register>
    <plant-mylist></plant-mylist>
    <plant-followrlist></plant-followrlist>
    <hr size="5px"/>
    <plant-search></plant-search>
    <plant-resultlist></plant-resultlist>
    <Footer/>
  </div>
  </div>
  <!--  </div>-->
</template>

<script>
import PlantSearchBar from "../../components/main/PlantSearchBar.vue";
import FollowerPlantList from "../../components/main/FollowerPlantList.vue";
import MyplantList from "../../components/main/MyplantList.vue";
import PlantRegister from "../../components/main/PlantRegister.vue";
import PlantResultList from "../../components/main/PlantResultList.vue";
import Footer from "../../components/Footer.vue";
// import NavigationBar from "../../components/NavigationBar.vue"
// import Header from "../../components/Header.vue";

export default {
  name      : "IndexMain",
  components: {
    // "NavigationBar"    : NavigationBar,
    "plant-register"   : PlantRegister,
    "plant-mylist"     : MyplantList,
    "plant-followrlist": FollowerPlantList,
    "plant-search"     : PlantSearchBar,
    "plant-resultlist" : PlantResultList,
    Footer,
    // Header,
    // NavigationBar
  }
}

</script>
<style>

#wrap {
  overflow: hidden;
  min-width: 1130px;
  background-color: red;
}

.header-wrap {
  position: relative;
  width: 1130px;
  height: 50px;
  margin: 0 auto;
  background-color: orange;
}

.header {
  position: relative;
  width: 1130px;
  height: 100%;
  margin: 0 auto;
  background-color: yellow;
}

.container-wrap {
  position: relative;
  width: 1130px;
  margin: 0 auto;
  background-color: green;
}
</style>