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

    <input id="chooseFile" type="file" accept="image/*" />
    <v-btn @click="addPost">완료 </v-btn>
    </v-form>
  </div>
</template>
<script>
import http from "@/util/http-common";
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
    }),
    created() {
      this.userId = localStorage.getItem('getId');

      // console.log(this.userId);
    },
    methods: {
      addPost(){
        let token = localStorage.getItem("getToken");

        console.log(this.userId);
        console.log(this.title);
        console.log(this.cate.value);
        console.log(this.content);
        let data = {
          userId : this.userId ,
          title : this.title,
          category : this.cate.value,
          content : this.content,
        }
        http
      .post("http://localhost:80/post", data,
        {headers: { Authorization: `Bearer ${token}`} }
      ) //게시글을 불러옴.
      .then((response) => {
          console.log(response);
            alert("===========================")

          // if(response.data.success == true){
          //   alert("글작성 성공")
          //   this.$router.push(-1)
          // }else{
          //   alert("글작성 실패")
          // }
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
};
</script>
<style></style>
