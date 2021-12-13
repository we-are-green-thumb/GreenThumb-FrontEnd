<template>
    <div>
        <h2> 댓글  {{comments.length}}</h2> 

        <v-btn style="float:right"> 댓글 등록 </v-btn>
        <br><br>
      <!-- <v-card-title>
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
        :items="comments"
        :search="search"
      ></v-data-table> -->
        <ul>
            <li v-for="comment in comments" :key="comment"> 
               {{comment.id}} "Places to Be", "Places to See" mdi-facebook cyan darken-1<!-- 내용 -->
                {{comment.year}}<!-- 작성일 -->
                {{comment.color}}<!-- 작성자 -->
                <v-btn>하트</v-btn>
                {{comment.year}}<!-- 좋아요 수-->
            </li>
        </ul>
    </div>
</template>
<script>
import http from "@/util/http-common";

export default {
    data() {
        return {
         comments : [],
          search: "",
         headers: [  
              {
          text: "작성자",
          align: "start",
          filterable: true,
          value: "color",
        },
        { text: "내용", value: "id" },
        { text: "조회수", value: "name" },
        { text: "좋아요", value: "year" },
         ]
        }
    },
    created() {
        http
      .get("https://reqres.in/api/unknown") //댓글을 불러옴.
      .then((res) => {
        this.comments = res.data.data;
        console.log(this.comments);

      })
      .catch((err) => {
        console.log(err);
      });
    },
}
</script>
<style>
    
</style>