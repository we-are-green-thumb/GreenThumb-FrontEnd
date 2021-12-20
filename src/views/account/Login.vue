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
    <googlelogin/>
    
  </v-container>
</template>


<script>
// import http from "@/util/http-common"
import {mapState, mapActions} from "vuex"
import Googlelogin from '../../components/sign/googlelogin.vue';

export default {
  components : {
     Googlelogin,
  },
  data: () => ({
    valid: true,
    // allUser: [],
    password: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

  }),

computed : {
    ...mapState(["isLogin", "isLonginError"]),
    // ...mapState({allUser: state => state.allUser})
},
  methods: {
      ...mapActions(["login"])

    },
      beforeCreate() {
      this.$store.getters.loginCheck;
      
      },

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