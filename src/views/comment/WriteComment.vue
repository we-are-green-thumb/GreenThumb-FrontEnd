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
    postId :String
    },
  created(){
    // console.log(postId);
    console.log(this.postId);
  },
    methods: {
      createComment() {
        let token = localStorage.getItem("getToken");
        var data = {
          userId: localStorage.getItem('getId'),
          content: this.content
        };
        http
          .post("post/"+this.postId+"/comment", data, {
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
};
</script>
<style></style>
