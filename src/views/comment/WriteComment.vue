<template>
  <div>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6"> </v-col>
      </v-row>
      <v-text-field v-model="content" label="내용" required></v-text-field>
<button @click="createComment()">저장</button>  </div>
</template>
<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      content: "",
    };
  },
  props: {
    userId: {
      type: String,
      default: "",
    },
    postId: {
      type: String,
      default: "",
    },
    methods: {
      createComment() {
        let token = localStorage.getItem("getToken");
        var data = {
          postId: this.$route.params.postId,
          userId: this.$route.params.userId,
          content: this.content
        };
        http
          .put("comment/", data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
          .then(() => {
            this.$router.go(-1, alert("작성 완료"));
          });
      },
    },
  },
};
</script>
<style></style>
