<template>
  <div>
    <h2>내 정보</h2>

    <div class="background">
      <!-- <form >
        <label for="id">아이디  </label>
        <input type="text" id="id" name="id" /><br /><br />
        <label for="pw">비밀번호  </label>
        <input type="text" id="pw" name="pw" /><br /><br />
        <label for="spw">비밀번호 확인  </label>
        <input type="text" id="spw" name="spw" /><br /><br />
        <label for="nickname">별명  </label>
        <input type="text" id="nickname" name="nickname" /><br /><br />
      </form> -->

<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="id"
      label="아이디"
      required
    ></v-text-field>

    <v-text-field
      v-model="pw"
      label="비밀번호"
      required
    ></v-text-field>

    <v-text-field
      v-model="nickname"
      label="별명"
      required
    ></v-text-field>


    <v-btn
      :disabled="!valid"
      color="red"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="red"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
    <v-btn
      color="red"
      @click="resetValidation"
    >
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
      id: '',
      pw: '',
      nickname: '',
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
};
</script>
<style>
.background {
  /* color: bisque; */
    float: center;
    background-color: bisque;
}
.background form{
    float: right;

}
</style>
