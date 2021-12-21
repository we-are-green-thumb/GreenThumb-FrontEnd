<template>
    <ul class="myplantcontainer">
      <li v-for="(u, i) in myplants.slice(0, 2)" :key="i" class="myplantform">
        <router-link
          :to="{
            name: 'Detailmyplant',
            params: { userId: u.userId, plantId: u.plantId },
          }"
        >
          <div class="image">
            <img class="imgSize" :src="u.imageUrl" />
          </div>
          <div class="plantcontent">
            <h3>{{ u.nickName }}</h3>
            <br />
            <a> {{ u.water }}일 뒤 물을 주세요!</a><br />
            <a> 온도는 {{ u.temp }}도가 딱이에요! </a><br />
          </div>
        </router-link>
      </li>
    </ul>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  // name: "MyplantList",
  data() {
    return {
      logincheck: "false",
      myplants: [],
    };
  },
  computed: {
    ...mapState(["myplant"]),
    ...mapState(["userInfo"]),
  },
  created() {
    let token = localStorage.getItem("getToken");
    http
      .get("/plants", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        this.myplants = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
};
</script>

<style scoped>
.myplantcontainer {
  display: grid;
  grid-template-columns: 450px 450px;
  grid-template-rows: 210px;
  width: 100%;
  
} */

.myplantform {
  background-color: #f5f5f5;
  border-radius: 15px;
  margin: 5px;
}

.image {
  padding-left: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.imgSize {
  width: 160px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
}

.plantcontent {
  float: center;
  width: 50%;
  height: 120px;
  vertical-align: 70px;
  text-align: left;
  font-size: 15px;
  padding: 5px 15px 0px 10px;
}
</style>
