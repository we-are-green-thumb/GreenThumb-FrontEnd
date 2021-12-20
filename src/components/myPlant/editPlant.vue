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
            v-model.trim="myplant.nickName"
          />
          <input type="text" placeholder="온도" v-model.trim="myplant.temp" />
          <input
            type="text"
            placeholder="물 주기"
            v-model.trim="myplant.water"
          />
          <input
            v-bind="fileList"
            id="input_img"
            type="file"
            accept="image/*"
            multiple
            @change="fileChange"
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
import $ from 'jquery';


export default {
  name: "EditPlant",
  data() {
    return {
      myplant: [],
      fileList:[]
    };
  },
  props: {
    plantId: {
    },
    userId:{
      
    }
  },
  created() {
    let token = localStorage.getItem("getToken");
    http
      .get("plant/" + this.$route.params.plantId, {
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
  fileChange() {
   var file = document.getElementById('input_img');
   var form = new FormData();
   form.append("image", file.files[0])

   var settings = {
      "url": "https://api.imgbb.com/1/upload?key=076f41cee131349132a08f6320271a31",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
   };
   $.ajax(settings).done(function(response) {
      console.log(response);
      var jx = JSON.parse(response);
         this.fileUrl = jx.data.url+"";
      localStorage.setItem('fileUrl',this.fileUrl);
       

   })
    },
    postUpdate() {
      let fileUrl = localStorage.getItem("fileUrl");
      let userId = localStorage.getItem("getId");
      let token = localStorage.getItem("getToken");

      var data = {
        userId: userId,
        name: this.myplant.name,
        nickName: this.myplant.nickName,
        water: this.myplant.water,
        temp: this.myplant.temp,
        imageUrl: fileUrl,
      };
       console.log(this.$route.params.userId)
      console.log(this.$route.params.plantId)
      console.log('8888888888888888888888888')
      http
        .put("user/" +this.$route.params.userId +"/plant/"+this.$route.params.plantId, data, {
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
          localStorage.removeItem('fileUrl');
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