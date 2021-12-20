<template>
  <div>
    내가 쓴 글 {{posts.length}}
    <ul>
      <li v-for="post,idx in posts" :key="idx">
         <router-link :to="{name: 'PostDetail' , params: { userId: userId , postId:post.id} }" style="text-decoration:none; color: hsl(94, 10%, 46%);"> 
        카테고리 {{post.category}}
        제목 {{post.title}}
        <!-- 내용 {{ post.content }} 내용 -->
        조회수 {{ post.hits}}<!-- 작성일 -->
        좋아요 {{ post.like }}<!-- 좋아요 수-->
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      posts: [],
    };
  },
   created() {
     let userID = localStorage.getItem('getId');
        http
      .get("/posts/user/"+userID) //게시글 불러옴.
      .then((res) => {
        this.posts = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    },
};
</script>

<style></style>
