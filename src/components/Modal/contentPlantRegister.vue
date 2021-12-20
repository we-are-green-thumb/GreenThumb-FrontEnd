<template>
  <div class="content">
    <h1>🌱식물 등록🌱</h1>
    <h3>식물의 별명을 지어주세요</h3>
    <input v-model="nickName" placeholder="레몬" />
    <hr size="5px" />
    <h3>식물의 사진을 등록해주세요</h3>
    <input v-bind="fileList" id="input_img" type="file" accept="image/*" multiple @change="fileChange"/>
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
import $ from "jquery";

export default {
  name: "Content",
  data() {
    return {
      name: "",
      nickName: "",
      water: "",
      temp: "",
      imageUrl: "",
      fileList: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    fileChange() {
      var file = document.getElementById("input_img");
      var form = new FormData();
      form.append("image", file.files[0]);

      var settings = {
        url: "https://api.imgbb.com/1/upload?key=076f41cee131349132a08f6320271a31",
        method: "POST",
        timeout: 0,
        processData: false,
        mimeType: "multipart/form-data",
        contentType: false,
        data: form,
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        var jx = JSON.parse(response);
        this.fileUrl = jx.data.url + "";
        localStorage.setItem("fileUrl", this.fileUrl);
      });
    },
    registerPlant() {
      let fileUrl = localStorage.getItem("fileUrl");
      let userId = localStorage.getItem("getId");
      let token = localStorage.getItem("getToken");
      var data = {
        name: this.name,
        nickName: this.nickName,
        water: this.water,
        temp: this.temp,
        imageUrl: fileUrl,
      };
      http
        .post("/user/"+userId+"/plant", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$router.go(this.$router.currentRoute, alert("저장완료"));
          localStorage.removeItem('fileUrl');
        });
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
