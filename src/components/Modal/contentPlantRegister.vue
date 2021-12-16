<template>
  <div class="content">
    <h1>🌱식물 등록🌱</h1>
    <h3>식물의 별명을 지어주세요</h3>
    <input v-model="nickname" placeholder="레몬" />
    <hr size="5px" />
    <h3>식물의 사진을 등록해주세요</h3>
    <input
      ref="image"
      id="input"
      type="file"
      name="image"
      accept="image/*"
      multiple="multiple"
      class="hidden"
      v-bind="imageUrl"
    />
    <hr size="5px" />
    <h1>이 식물은 ...</h1>
    <h3>업로드한 식물 사진으로 무슨 식물인지?~</h3>

    <input v-model="name" placeholder="선인장" />
    <!-- <h3>해당 식물 정보는 존재하지 않습니다.</h3> -->

    <hr size="5px" />
    <h1>마지막으로 언제 물을 주셨나요?</h1>
    <div class="inputDay">
      <input v-model="water" placeholder="1" width="5px" />
      <a>일</a>
    </div>
    <div class="inputDay">
      <input v-model="temp" placeholder="1" width="5px" />
      <a>도</a>
    </div>
    <div class="save">
      <button @click="registerPlant()">저장</button>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "Content",
  data() {
    return {
      name: "",
      nickName: "",
      water: "",
      temp: "",
      imageUrl: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    registerPlant() {
      let userId = localStorage.getItem("getId");
      let token = localStorage.getItem("getToken");
      var data = {
        userId: userId,
        name: this.name,
        nickName: this.nickName,
        water: this.water,
        temp: this.temp,
        imageUrl: this.imageUrl,
      };
      http
        .post("plant/", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data)          
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {this.$router.go(this.$router.currentRoute, alert('저장완료'))});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.save {
  text-align: right;
  float: right;
}
.inputDay {
  float: left;
}
</style>
