<template>
  <div>
    <router-link :to="{ name: 'IndexMyplant', params: { userId: this.$route.params.userId } }">
    <span><p class="fontclass">안녕 나는 {{ User.nickName }} !</p></span>
    </router-link>
    <OnePlant />
    
  
    <span><p class="fontclass">{{ myplant.name }}의 공통정보</p></span>
    <plantProfile />
    <span
      ><p class="fontclass">{{ myplant.name }}의 친구들을 알려줄게!</p></span
    >
    <PlantResultList />
  </div>
</template>
<script>
import { mapState } from "vuex";

import PlantResultList from "../../components/main/PlantResultList.vue";
import OnePlant from "../../components/myPlant/onePlant.vue";
import plantProfile from "../../components/myPlant/plantProfile.vue";
import http from "@/util/http-common";

export default {
  name: "Detailmyplant",
  data() {
    return {
      myplant: [],
      User:[]
    };
  },
  props: {
    plantId: {
      type: Number,
      default: 0,
    },
    userId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    PlantResultList,
    OnePlant,
    plantProfile,
  },

  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    console.log(this.$route.params.userId);
    console.log(this.$route.params.plantId);
    console.log('ㅂ별별별볇려')
    // let id = localStorage.getItem("getId")
    let token = localStorage.getItem("getToken");
    http
      .get("/plant/" + this.$route.params.plantId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.myplant = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});

      http
      .get("user/" + this.$route.params.userId+"/feed", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.User = response.data;
        console.log('사사사사사삿사')
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
};
</script>
<style>
.fontclass {
  font-size: 18px;
  font-weight: 1000;
}
</style>