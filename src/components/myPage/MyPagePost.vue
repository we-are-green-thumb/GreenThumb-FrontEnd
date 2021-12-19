<template>
  <div>
    내가 쓴 글 {{posts.length}}
    <ul>
      <li v-for="post,idx in posts" :key="idx">
        {{ post.id }} "Places to Be", "Places to See" mdi-facebook cyan
        darken-1<!-- 내용 -->
        {{ post.year}}<!-- 작성일 -->
        {{ post.color}}<!-- 작성자 -->
        {{ post.year }}<!-- 좋아요 수-->
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
        http
      .get("https://reqres.in/api/unknown") //댓글을 불러옴.
      .then((res) => {
        this.posts = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
    },
};
</script>

<style></style>
