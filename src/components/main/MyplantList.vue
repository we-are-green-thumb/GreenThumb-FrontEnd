<template>
  <ul class="myplantcontainer">
    <!-- 내 식물 -->
          <div v-for="(u, i) in myplant.slice(0,2)" :key="i">
            <router-link
              :to="{
                name: 'Detailmyplant',
                params: { userId: u.userId, plantId: u.plantId },
              }">
      <li class="myplantform">
        <div>
            <img class="imgSize" :src="u.imageUrl" />
        </div>
        <div class="plantcontent" >
                <h3> {{ u.nickName }} </h3><br>
                <a> {{ u.water }}일 뒤 물을 주세요!</a><br>
                <a> 온도는 {{ u.temp }}도가 딱이에요! </a><br>
        </div>
      </li>
            </router-link>
          </div>
  </ul>
</template>


<script>
import http from "@/util/http-common";
import { mapState } from 'vuex';

export default {
  // name: "MyplantList",
  data() {
    return {
      logincheck: "false",
      myplant:[],
    };
  },computed : {
    ...mapState(["myplant"]),
    ...mapState(["userInfo"])
  },
  created(){
    let token = localStorage.getItem("getToken")
     http
        .get("/plants", { headers: { Authorization: `Bearer ${token}` }})
        .then((res) => {
          this.myplant = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
  }
};
</script>

<style scoped>

.myplantcontainer {
	display: grid;
	grid-template-columns: 450px 450px;
	grid-template-rows: 210px;
  padding: 0%;
}

ul {
  margin: 0;
  padding : 0 0 0 0px;
  
}

.myplantform {

  background-color: lightgrey;
  border-radius: 15px;
  margin: 0 10px 10px 5px ;
}
.imgSize {
  width: 160px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
}

.plantcontent {
  float: center;
  width: 180px;
  height: 120px;
  vertical-align: 70px;
  text-align: left;
  font-size: 15px;
  padding: 5px 16px 0 10px
}

</style>
