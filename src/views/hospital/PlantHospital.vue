<template>
  <div>
    <form>    <h3>식물의 사진을 등록해주세요</h3>
    <input
      v-bind="fileList"
      id="input_img"
      type="file"
      accept="image/*"
      multiple
      @change="fileChange"
    />

  
    </form>
<v-btn @click="uploadFile">테스트하기</v-btn>
    <div class="resultform">
      <ul>
        <li style="text-align: center">
          <div>
            <img
              class="imgSizeA"
              src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/08/urbanbrush-20180822082426113204.png"
            />
          </div>
          <div>
            <p>종류 : 레몬~..트리~..</p>
            <p>병명 : 물부족..병</p>
            <p>
              물부족 병은 블라블라 물을 주면 낫습니다 하지만 너무 오래 됐으면
              포기하는 게 좋아요 이 아이를 그만 보내주세요~
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios"
import http from "@/util/http-common";
import $ from "jquery";


export default {
  name: "Hospital",
  data() {
    return {
      fileList: [],
    };
  },

  methods: {
    //식물 이미지 링크 받아오는 api
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
    //식물 이미지 보내는 rest api
    uploadFile() {
      let file = localStorage.getItem("fileUrl")
      http
        .post("http://localhost:80/plant-hospital", {imageUrl: file})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {

        });
    },
  },
};
</script>

<style>
</style>