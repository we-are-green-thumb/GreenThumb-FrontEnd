<template>
    <div>
        <span><p class="fontclass">안녕 나는 {{myplant.nickName}} !</p></span>
        <OnePlant/>
        <span><p class="fontclass">{{myplant.name}}의 공통정보</p></span>
        <plantProfile/>
        <span><p class="fontclass">{{myplant.name}}의 친구들을 알려줄게!</p></span>
        <PlantResultList/>
    </div>
</template>
<script>
import { mapState } from 'vuex';

import PlantResultList from '../../components/main/PlantResultList.vue'
import OnePlant from '../../components/myPlant/onePlant.vue'
import plantProfile from '../../components/myPlant/plantProfile.vue'
import http from "@/util/http-common";

export default {
    
    name : "Detailmyplant",
    data() {
        return {
            myplant: [],
        }
    },
    props: {
        plantId : {
            type: String,
            default:''
      } 
  },
    components : {
        PlantResultList,
        OnePlant,
        plantProfile,
    },
    
    computed: {
        ...mapState(["userInfo"]),
    },
    created(){
    // let id = localStorage.getItem("getId")
    let token = localStorage.getItem("getToken")
     http
        .get("/plant/" + this.$route.params.plantId, { headers: { Authorization: `Bearer ${token}` }})
        .then((res) => {
          this.myplant = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
  }
}
</script>
<style>

.fontclass {
    font-size: 18px;
    font-weight: 1000;
}
</style>