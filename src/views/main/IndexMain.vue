<template>
    <div>

    <br /><br />
    <hr size="5px" />
    <plant-register></plant-register>
    <plant-mylist></plant-mylist>
    <plant-followrlist></plant-followrlist>
    <hr size="5px" />
    <plant-search></plant-search>
    <br><br><br>
    <plant-resultlist></plant-resultlist>


    </div>
</template>

<script>
import PlantSearchBar from "../../components/main/PlantSearchBar.vue";
import FollowerPlantList from "../../components/main/FollowerPlantList.vue";
import MyplantList from "../../components/main/MyplantList.vue";
import PlantRegister from "../../components/main/PlantRegister.vue";
import PlantResultList from "../../components/main/PlantResultList.vue";

export default {
    name: "IndexMain",
    components:{
    "plant-register": PlantRegister,
    "plant-mylist": MyplantList,
    "plant-followrlist": FollowerPlantList,
    "plant-search": PlantSearchBar,
    "plant-resultlist": PlantResultList,
    }
}



</script>
<style>
    
</style>