<template>
  <div>
    <v-form ref="form">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
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

      <input
        v-bind="fileList"
        id="input_img"
        type="file"
        accept="image/jpeg, image/png"
        multiple
        @change="fileChange"
      />
      <img :src="fileUrl" />
      <v-btn @click="addPost">완료 </v-btn>
    </v-form>
  </div>
</template>
<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      cateList: [
        { name: "자유", value: "free" },
        { name: "질문", value: "QnA" },
        { name: "나눔거래", value: "share" },
      ],
      cate: "",
      title: "",
      content: "",
      userId: "",
      fileList: [],
      fileUrl: "",
    };
  },
  async created() {
    this.userId = localStorage.getItem("getId");
  },
  methods: {
    async fileChange() {
      let file = document.getElementById("input_img");
      var form = new FormData();
      form.append("image", file.files[0]);
      try {
        const res = await http.post(
          "https://api.imgbb.com/1/upload?key=076f41cee131349132a08f6320271a31",
          form
        );
        const { data } = res;
        this.fileUrl = data.data.url;
      } catch (error) {
        console.log(error);
        this.fileUrl = "";
      }
    },

    addPost() {
      let token = localStorage.getItem("getToken");
      let userId = localStorage.getItem("getId");
      let data = {
        title: this.title,
        category: this.cate.value,
        content: this.content,
        fileUrl: this.fileUrl,
      };
      http
        .post(
          "user/" + userId + "/post",
          data,
          // {headers: { Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'}
          { headers: { Authorization: `Bearer ${token}`, userId: userId } }
        ) //게시글을 추가
        .then((response) => {
          console.log(response);

          alert("저장 성공");
          // alert(localStorage.getItem('fileUrl'))
          localStorage.removeItem("fileUrl");
          this.$router.go(-1);
          // this.$router.go(this.$router.go(-1), alert('저장완료'))
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
