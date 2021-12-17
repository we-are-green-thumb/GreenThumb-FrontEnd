<template>
  <div class="board">
    <h3>식물을 수정하는 페이지</h3>
    <ul class="myplantcontainer">
      <li class="myplantform">
        <div>
          <img class="imgSize" :src="myplant.imageUrl" />
        </div>
        <div class="plantcontent">
          <input
            type="text"
            placeholder="식물 학명"
            v-model.trim="myplant.name"
          />
          <input
            type="text"
            placeholder="닉네임"
            v-model.trim="myplant.nickname"
          />
          <input type="text" placeholder="온도" v-model.trim="myplant.temp" />
          <input
            type="text"
            placeholder="물 주기"
            v-model.trim="myplant.water"
          />
          <input
            ref="image"
            id="input"
            type="file"
            name="image"
            accept="image/*"
            multiple="multiple"
            class="hidden"
            v-bind="myplant.imageUrl"
          />
        </div>
      </li>
    </ul>
    <div>
      <v-btn class="button blue" @click="postUpdate">완료</v-btn>
      <v-btn class="button" @click="boardCancelClick">취소</v-btn>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "EditPlant",
  data() {
    return {
      myplant: [],
    };
  },
  props: {
    plantId: {
      type: String,
      default: "",
    },
  },
  created() {
    let id = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");
    console.log(id);
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
  },
  methods: {
    postUpdate() {
      let userId = localStorage.getItem("getId");
      let token = localStorage.getItem("getToken");
      var data = {
        userId: userId,
        name: this.myplant.name,
        nickName: this.myplant.nickName,
        water: this.myplant.water,
        temp: this.myplant.temp,
        imageUrl: this.myplant.imageUrl,
      };
      http
        .post("plant/" + this.$route.params.plantId, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$router.go(-1, alert("수정완료"));
        });
    },
    boardCancelClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.board {
  width: 800px;
  margin: 20px auto;
}
</style>