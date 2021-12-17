<template>
  <div>
    <v-form ref="form">
      <v-row align="center">
          <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
        v-model="cate"
          label="카테고리"
          :items="cateList"
          item-text="name"
          item-value="value"
          return-object
        ></v-select>
      </v-col>
      </v-row>

      <v-text-field v-model="title" label="제목" required></v-text-field>

      <v-text-field v-model="content" label="내용" required></v-text-field>

    <input v-bind="fileList" id="input_img" type="file" accept="image/*" multiple @change="fileChange"/>
    <v-btn @click="addPost">완료 </v-btn>
    </v-form>
  </div>
</template>
<script>
import http from "@/util/http-common";
import $ from 'jquery';

export default {

  data: () => ({
      
      cateList: [
        {name : '자유' ,value: 'free'},
        {  name:'질문', value: 'QnA'}, 
         { name:'나눔거래',value: 'share' } 
        ],
        cate :"",
      title : "",
      content : "",
      userId : "",
      fileList :[],
      fileUrl :""
    }),
    created() {
      this.userId = localStorage.getItem('getId');

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
       

   });
  },

      addPost(){
        let token = localStorage.getItem("getToken");

        this.fileUrl = localStorage.getItem('fileUrl');
        localStorage.removeItem('fileUrl');
        let data = {
          userId : this.userId ,
          title : this.title,
          category : this.cate.value,
          content : this.content,
          fileUrl : this.fileUrl
        }
        http
      .post("http://localhost:80/post", data,
        // {headers: { Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'}
        {headers: { Authorization: `Bearer ${token}`}
         }
      ) //게시글을 추가
      .then((response) => {
          console.log(response);

            alert("저장 성공");
            this.$router.go(-1);
            // this.$router.go(this.$router.go(-1), alert('저장완료'))
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
};
</script>
<style></style>
