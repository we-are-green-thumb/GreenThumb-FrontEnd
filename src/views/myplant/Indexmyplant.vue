<template>
    <div>
        <NavigationBar/>
        <Myprofile/>
        <MyplantRealList/>
    </div>
</template>
<script>

// 내 식물 페이지
import MyplantRealList from "../../components/myPlant/MyplantRealList.vue"
import Myprofile from "../../components/myPlant/Myprofile.vue"
import NavigationBar from "../../components/NavigationBar.vue"

export default {
    name: "IndexMyplant",
    components: { 
        Myprofile, 
        MyplantRealList, 
        NavigationBar, 
    },
    
}


</script>
<style>
    
</style>