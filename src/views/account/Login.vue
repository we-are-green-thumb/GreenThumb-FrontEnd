<template>
  <v-container fill-height style="width: 700px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-toolbar>
          <v-toolbar-title>로그인 하기</v-toolbar-title>
        </v-toolbar>
        <div class="pa-3" style="width: 700px">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="이메일 입력하기"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            :counter="10"
            label="비밀번호 입력하기"
            required
          ></v-text-field>
          <v-btn @click="login({email,password})">로그인</v-btn>
        </div>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>


<script>
// import http from "@/util/http-common"
import {mapState, mapActions} from "vuex"

export default {
  data: () => ({
    valid: true,
    password: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

  }),
//   created() {
//     http
//       .get("/user")
//       .then((res) => {
//         this.allUsers = res.data;
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .then(() => {});
//   },
computed : {
    ...mapState(["isLogin", "isLonginError"])
},
  methods: {
      ...mapActions(["login"])
    // login() {
    //   let selectUser = null;
    //   this.allUsers.forEach((user) => {
    //     if (user.userName === this.email) selectUser = user;
    //   });
    //   if (selectUser === null) alert("존재하지 않는 아이디에요.");
    //   else {
    //     // if (selectUser.userPassword !== this.password)
    //     //   alert("아이디와 비밀번호가 일치하지 않아요.")
    //     // else {
    //     // alert('로그인이 완료되었습니다.')
    //     selectUser.userPassword !== this.password
    //       ? alert("아이디와 비밀번호가 일치하지 않아요.") & console.log(this.loginSucess)
    //       : alert("로그인이 완료되었습니다.") & (this.loginSucess = true) & console.log(this.loginSucess)
    //   }
    },
//   },
  validate() {
    this.$refs.form.validate();
  },
  reset() {
    this.$refs.form.reset();
  },
  resetValidation() {
    this.$refs.form.resetValidation();
  },
};
</script>
<style>
</style>