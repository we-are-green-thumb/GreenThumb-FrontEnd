<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">이메일</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="passwordConfirm">비밀번호 확인</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
      </div>
      <div>
        <label for="plantName">관심있는 식물</label>
        <input type="text" id="plantName" v-model="plantName" />
      </div>
      <button type="submit">회원가입</button>
    </form>
    <!-- <div class="right">
            <img src="https://media.istockphoto.com/vectors/icons-potted-plants-vector-id1220748088">
    </div> -->
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      plantName: "",
    };
  },
  methods: {
    submitForm() {
      console.log("dd");
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 300px;
  border: 1px solid #000;
}
div.left {
  width: 0%;
  float: left;
  box-sizing: border-box;
  background: #ff0;
}
div.right {
  width: 50%;
  float: right;
  box-sizing: border-box;
  background: #0ff;
}
</style>