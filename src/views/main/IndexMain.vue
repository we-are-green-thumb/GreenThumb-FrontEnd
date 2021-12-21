<template>
  <div class="midmar">
    <!-- <Header/>
    <NavigationBar/>  -->
    <hr class="hr">
    <!-- <div class="plantlist">
       -->
    <!-- <div style="align-content: center;"> -->
    <br>
    <plant-register style="padding-left:4.3%"></plant-register>
    <plant-mylist style="padding-left:7.8%"></plant-mylist>
    <plant-followrlist></plant-followrlist>
    <br>
    <hr class="hr">
    <br>

    <plant-search></plant-search>
    
    <plant-resultlist></plant-resultlist>
    <Footer/>
  </div>
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
    name: "IndexMain",
    components:{
    "plant-register": PlantRegister,
    "plant-mylist": MyplantList,
    "plant-followrlist": FollowerPlantList,
    "plant-search": PlantSearchBar,
    "plant-resultlist": PlantResultList,
    Footer,
    // Header,
    // NavigationBar
    }
}
</script>

<style>
.midmar {
  align-content: center;
  margin-top: 10px;
  padding : 30px 90px 90px 90px;
}
</style>