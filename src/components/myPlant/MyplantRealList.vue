<template>
  <div class="place">
    <!-- <v-btn @click="test1">클릭</v-btn> -->

    <ul class="myplantcontainer">
      <li class="myplantform">
        <div>
          <img
            class="imgSize"
            src="https://png.pngtree.com/png-clipart/20210420/ourlarge/pngtree-creative-black-and-white-monochrome-graffiti-potted-plant-png-image_3223287.jpg"
          />
        </div>
        <div class="plantcontent">
          <h3>식물을 등록해주세요</h3>
        </div>
      </li>
      <div v-for="(u, i) in myplant" :key="i">
        <li class="myplantform">
          <div>
            <img class="imgSize" :src="u.imageUrl" />
          </div>
          <div class="plantcontent">
            <h3>{{ u.plantNickname }}</h3>
            <a> {{ u.water }}일 뒤 물을 주세요! </a><br />
            <a> 온도는 {{ u.temp }}도가 딱이에요! </a><br />
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      myplant: [],
    };
  },
  created(){
     http
        .get("/user/1/plantslist")
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
<style>
.myplantcontainer {
  display: grid;
  grid-template-columns: 450px 450px;
}

ul {
  margin: 0;
  padding: 0 0 0 10px;
}

.myplantform {
  background-color: lightgrey;
  border-radius: 15px;
  margin: 0 10px 10px 5px;
}
.imgSize {
  width: 160px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
}

.plantcontent {
  float: center;
  width: 60%;
  height: 120px;
  vertical-align: 70px;
  text-align: left;
  font-size: 15px;
  padding: 5px 16px 0 10px;
}

.myplantBtn {
  all: unset;
  cursor: pointer;
}
</style>