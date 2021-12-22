<template>
  <div>
    <h6>&nbsp;</h6>
    <h2>내 정보</h2>
    <h6>&nbsp;</h6>

    <div class="background">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" label="아이디" :value="email" readonly solo-inverted>
        </v-text-field>
        <v-text-field v-model="nickName" label="별명" :value="nickName" required solo-inverted></v-text-field>
        <v-text-field v-model="signUpDate" label="가입일자" :value="signUpDate" readonly solo-inverted></v-text-field>
        <v-text-field
          v-model="profile" :value="profile"
          label="자기소개"
          required solo-inverted
        ></v-text-field>
        <v-text-field v-model="providerId" label="가입경로" :value="providerId" readonly solo-inverted></v-text-field>

<!-- :disabled="!valid" -->
        <!-- <v-btn         
          color="#55555c"
          class="mr-4"
          @click="validate()"
        >
          수정하기
        </v-btn> -->
        <v-btn class="button white" @click="validate">완료</v-btn>

      </v-form>
    </div>
  </div>
</template>
<script>
import http from "@/util/http-common";
export default {
  data: () => ({
    valid: true,
    User:[],
    email: "",
    nickName: "",
    signUpDate: "",
    profile: "",
    providerId: "",
    checkbox: false,
  }),
  props: {
    userId: {
    }
  },

  created() {
    let userId = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");
    http
      .get("/user/" + userId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {

        this.email = res.data.email,
        this.nickName = res.data.nickName,
        this.profile = res.data.profile,
        this.providerId = res.data.providerId,
        this.signUpDate = res.data.signUpDate
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },

  methods: {
    validate() {
      // this.$refs.form.validate();
      let token = localStorage.getItem("getToken");
      let userId = localStorage.getItem("getId");
      var data = {
        nickName: this.nickName,
        profile: this.profile,
      };
        http
        .put("user/" +userId, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          // this.$router.go(this.$router.currentRoute)
          alert("수정완료!")
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },
  },
};

  // new Vue({
  //   el: '#app',
  //   vuetify: new Vuetify(),
    
  // })
</script>
<style>
.background {
  /* background-color: lightgray;
  width: 180%;
  text-align: center;
  border-radius: 3%; */
  
    top:100px; 
    left:100px; 
    width:400px; 
    height:500px; 
    border-radius: 3%;
    background:lightgray; 
    padding:40px; 
    display: flex;
}
.background form {
  float: right;
}
</style>
