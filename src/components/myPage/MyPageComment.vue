<template>
  <div>
    댓글 수 {{comments.length}}
    <ul>
      <li v-for="comment,idx in comments" :key="idx">
        {{ comment.id }} "Places to Be", "Places to See" mdi-facebook cyan
        darken-1<!-- 내용 -->
        {{ comment.year}}<!-- 작성일 -->
        {{ comment.color}}<!-- 작성자 -->
        {{ comment.year }}<!-- 좋아요 수-->
      </li>
    </ul>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      comments: [],
    };
  },
   created() {
        http
      .get("https://reqres.in/api/unknown") //댓글을 불러옴.
      .then((res) => {
        this.comments = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
    },
};
</script>

<style></style>
