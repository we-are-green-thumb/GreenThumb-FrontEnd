<template>
    <div>
      <form>
        <h3>식물의 사진을 등록해주세요</h3>
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
      <hr />
      <div class="resultform">
        <ul>
          <li style="text-align: center">
            <div>
              <img class="imgSizeA" :src="this.file" />
            </div>
            <div>
              <h3>당신의 식물은 {{ Hospital.disease }}</h3>
              을 앓고 있습니다.
              <p>{{ Hospital.content }}</p>
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
      Hospital: [],
      file: "",
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
      this.file = localStorage.getItem("fileUrl");
      http
        .post("http://localhost:80/plant-hospital", { imageUrl: this.file })
        .then((res) => {
          this.Hospital = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
    },
  },
};
</script>


<style>
div {
  position: relative;
}
#cm {
  position: absolute;
}
.hc {
  width: 200px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
} /* 가로 중앙 정렬 */
.vc {
  height: 40px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
} /* 세로 중앙 정렬 */
</style>