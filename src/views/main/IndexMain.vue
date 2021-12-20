<template>
    <div class="aaa">
        <!-- <Header/>
        <NavigationBar/>  -->
        <plant-register ></plant-register>
        <plant-mylist></plant-mylist>
        <plant-followrlist></plant-followrlist>
        <hr size="5px" />
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
    .aaa{
        width: 100%;
    }
</style>