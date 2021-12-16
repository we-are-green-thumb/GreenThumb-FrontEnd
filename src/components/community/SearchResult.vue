<template>
  <div class="searchResult">
    <v-btn  @click="clickFree">자유</v-btn>
    <v-btn  @click="clickQuestion">질문</v-btn>
    <v-btn  @click="clickTrade">나눔&거래</v-btn>
    
      <v-btn style="float:right" v-if ="isLogin"  router-link :to="{name:'WritePost'}"> 글 쓰기 </v-btn>
    
    <h3>궁금한 것을 물어보세요</h3>
    <v-card class="card">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify" 
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="posts"
        :search="search"
        @click:row="clicketest"
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
import http from "@/util/http-common"
import {  mapState } from 'vuex';

export default {
  computed : {
    ...mapState(["isLogin"])
  },
  components: {},
  data() {
    return {
      search: "",
      headers: [
        {
          text: "제목",
          align: "start",
          filterable: true,
          value: "title",
        },
        { text: "내용", value: "content" },
        { text: "작성자", value: "content" },
        { text: "조회수", value: "hits" },
        { text: "좋아요", value: "hits" },
      ],
      posts:[
          
      ],
    };
  },
  methods: {
    clicketest(value){
      alert('click');
      console.log(value);
    },
    clickFree() {
       let postCategory = 'free';
        let token = localStorage.getItem("getToken");

    http.get("/post/category/" + postCategory,{ headers: { Authorization: `Bearer ${token}` }}).then((response) => {
          this.posts =response.data;
      }).catch((err)=>{
        console.log(err);
      })
    },

    clickQuestion() {
        let postCategory = 'QnA';
        let token = localStorage.getItem("getToken");

    http.get("/post/category/" + postCategory,{ headers: { Authorization: `Bearer ${token}` }}).then((response) => {
          this.posts =response.data;
          console.log(this.posts);
      }).catch((err)=>{
        console.log(err);
      })
    },
    clickTrade() {
        let postCategory = 'share';
        let token = localStorage.getItem("getToken");

    http.get("/post/category/" + postCategory,{ headers: { Authorization: `Bearer ${token}` }}).then((response) => {
          this.posts =response.data;
      }).catch((err)=>{
        console.log(err);
      })
    },
  },
  showAlert(a){
      if (event.target.classList.contains('btn__content')) return;
      alert('Alert! \n' + a.name);
    },
};
</script>
<style>
.searchResult {
  width: 100%;
}
</style>
