<template>
  <div>
    <h2>내 정보</h2>

    <div class="background">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" label="아이디" :value="email" readonly>
        </v-text-field>
        <v-text-field v-model="nickName" label="별명" :value="nickName" required></v-text-field>
        <v-text-field v-model="signUpDate" label="가입일자" :value="signUpDate" readonly></v-text-field>
        <v-text-field
          v-model="profile" :value="profile"
          label="자기어필"
          required
        ></v-text-field>
        <v-text-field v-model="providerId" label="가입경로" :value="providerId" readonly></v-text-field>

<!-- :disabled="!valid" -->
        <!-- <v-btn         
          color="#55555c"
          class="mr-4"
          @click="validate()"
        >
          수정하기
        </v-btn> -->
        <v-btn class="button white" @click="validate">완료</v-btn>

        <v-btn color="grey" class="mr-4" @click="reset"> Reset Form </v-btn>
        <v-btn color="grey" @click="resetValidation">
          Reset Validation
        </v-btn>
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
      type: String,
      default: "",
    },
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

      var data = {
        nickName: this.nickName,
        profile: this.profile,
      };
        http
        .put("user/" + this.$route.params.userId, data, {
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
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style>
.background {
  /* color: bisque; */
  float: center;
  background-color: lightgray;
}
.background form {
  float: right;
}
</style>
