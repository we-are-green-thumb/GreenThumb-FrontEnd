<template>
  <div>
    <h2>내 정보</h2>

    <div class="background">
     

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field value="ID" label="아이디" readonly></v-text-field>

        <v-text-field v-model="pw" label="비밀번호" required></v-text-field>


        <v-text-field v-model="nickname" label="별명" required></v-text-field>
        <v-text-field value="ID" label="가입일자" readonly></v-text-field>

        <v-text-field
          v-model="nickname"
          label="자기어필"
          required
        ></v-text-field>

        <v-text-field value="ID" label="가입경로" readonly></v-text-field>

        <v-btn
          :disabled="!valid"
          color="#55555c"
          class="mr-4"
          @click="validate"
        >
          수정하기
        </v-btn>

        <v-btn color="#55555c" class="mr-4" @click="reset"> Reset Form </v-btn>
        <v-btn color="#55555c" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    id: "",
    pw: "",
    nickname: "",
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
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
  background-color: rgb(172, 172, 180);
}
.background form {
  float: right;
}
</style>
