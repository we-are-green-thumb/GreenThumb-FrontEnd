<template>
  <div>
    <v-form ref="form">
       <v-select
        v-model="cate"
          label="카테고리"
          :items="cateList"
          item-text="name"
          item-value="value"
          return-object
        ></v-select>

      <div class="postcontent">
        <input type="text" placeholder="제목" v-model.trim="post.title" />
        <br />
        <br />
        <input type="text" placeholder="내용" v-model.trim="post.content" />
        <br />
        <br />
        <input
          id="input_img"
          type="file"
          accept="image/*"
          multiple
          @change="fileChange"
        />
      </div>
      <br />
      <br />
      <div>
        <v-btn class="button blue" @click="postDone">완료</v-btn>
        <v-btn class="button" @click="boardCancelClick">취소</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import http from "@/util/http-common";
import $ from "jquery";
export default {
  data: () => ({
    cateList: [
        {name : '자유' ,value: 'free'},
        {  name:'질문', value: 'QnA'}, 
         { name:'나눔거래',value: 'share' } 
        ],
        cate :"",
    title: "",
    content: "",
    post: [],
  }),
  props: {
    postId :{}
  },


    }
  },
  created() {
    let postId= localStorage.getItem('tpostid'); 
    let token = localStorage.getItem("getToken");
    http
      // .get("post/" + this.$route.postId, {
      .get("post/" + postId, {

        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.post = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
    boardCancelClick() {
      this.$router.go(-1);
    },
    postDone() {
      let PostId = this.$route.params.postId;
      let token = localStorage.getItem("getToken");
      console.log(this.cate);
      console.log(this.cate.value);
      let file = localStorage.getItem("fileUrl");
      console.log(this.post);
      http
        .put(
          "/post/" + PostId,
          {
            "title": this.post.title,
            "category": this.cate.value,
            "content": this.post.content,
            "hits": this.post.hits,
            "fileUrl": file
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          this.posts = response.data;
          alert("수정 완료");
          this.$router.go(-1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
