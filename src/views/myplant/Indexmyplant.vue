<template>
    <div>
        <Myprofile/>
        <MyplantRealList/>
    <span>
        {{userInfo.userNickname}}아 안녕,
    </span>
    </div>
    
</template>
<script>
import { mapState } from 'vuex'

// 내 식물 페이지
import MyplantRealList from "../../components/myPlant/MyplantRealList.vue"
import Myprofile from "../../components/myPlant/Myprofile.vue"


export default {
    name: "IndexMyplant",
    components: { 
        Myprofile, 
        MyplantRealList, 
    },
    computed : {
        ...mapState(["userInfo"])
    }
    
}


</script>
<style>
    
</style>