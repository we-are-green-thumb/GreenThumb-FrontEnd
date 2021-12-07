<template>
    <div>
    <!-- <plant-header></plant-header>
    <br /><br /><br />
    <plant-navibar></plant-navibar>
    <br /><br />
    <hr size="5px" />
    <plant-register></plant-register>
    <plant-mylist></plant-mylist>
    <plant-followrlist></plant-followrlist>
    <hr size="5px" />
    <plant-search></plant-search>
    <br><br><br>
    <plant-resultlist></plant-resultlist>
    <plant-footer></plant-footer> -->

    <Header/>
    <NavigationBar/>
    <PlantRegister/>
    <MyplantList/>
    <FollowerPlantList/>
    <PlantSearchBar/>
    <PlantResultList/>
    <Footer/>



    </div>
</template>

<script>
import PlantSearchBar from "../../components/main/PlantSearchBar.vue";
import NavigationBar from "../../components/NavigationBar.vue";
import FollowerPlantList from "../../components/main/FollowerPlantList.vue";
import MyplantList from "../../components/main/MyplantList.vue";
import PlantRegister from "../../components/main/PlantRegister.vue";
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
import PlantResultList from "../../components/main/PlantResultList.vue";

export default {
    name: "IndexMain",
    components:{
    // "plant-header": Header,
    // "plant-navibar": NavigationBar,
    // "plant-register": PlantRegister,
    // "plant-mylist": MyplantList,
    // "plant-followrlist": FollowerPlantList,
    // "plant-search": PlantSearchBar,
    // "plant-resultlist": PlantResultList,
    // "plant-footer": Footer,
    Header,
    NavigationBar,
    PlantRegister,
    MyplantList,
    FollowerPlantList,
    PlantSearchBar,
    PlantResultList,
    Footer,
    }
}



</script>
<style>
    
</style>