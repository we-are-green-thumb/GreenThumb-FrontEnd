<template>
  <div>
    <ul class="myplantcontainer">
      <li class="myplantform">
        <div>
          <img class="imgSize" :src="myplant.imageUrl" />
        </div>
        <div class="plantcontent">
          <h3>{{myplant.nickName}}</h3>
          <p>{{ myplant.water }} 일 뒤에 물을 주세요! (수정필요)</p>
          <p>{{ myplant.temp }} 도 온도!</p>
        </div>
        <div v-show="contentOwner">
        <router-link
          :to="{ name: 'EditPlant', params: { plantId: myplant.plantId } }"
          ><a>수정하기</a></router-link
        >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  data() {
    return {
      myplant: [],
      contentOwner : false
    }
  },
  props: {
    plantId: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    let id = localStorage.getItem("getId")
    let token = localStorage.getItem("getToken");
    http
      .get("/plant/" + this.$route.params.plantId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.myplant = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        if(id ==  this.$route.params.userId ){
          this.contentOwner = true;
        }
      });
  },
};
</script>
<style scoped>
.myplantcontainer {
  display: grid;
  grid-template-columns: 500px;
}

ol,
ul {
  list-style: none;
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
  width: 180px;
  height: 120px;
  vertical-align: 70px;
  text-align: left;
  font-size: 15px;
  padding: 5px 16px 0 10px;
}
</style>