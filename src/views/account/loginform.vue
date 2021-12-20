<!-- 삭제 예정 -->

<template>
  <div class="alal">
    <h2>Log In</h2>
    <form @submit="onSubmit">
      <div>
        <label for="email">이메일</label>
        <input placeholder="Enter your ID" v-model="uid" />
        <label for="password">비밀번호</label>
        <input placeholder="Enter your password" v-model="password" />
        <button type="submit">로그인하기</button>
      </div>
    </form>
    <googlelogin />
    <div>
      <router-link :to="{ name: 'findPassword' }"> 비밀번호 찾기 </router-link>
    </div>
    <router-link :to="{ name: 'register' }"> 회원가입 </router-link>
  </div>
</template>

<script>
import googlelogin from "../../components/sign/googlelogin.vue";
export default {
  name: "loginform",
  components: {
    googlelogin,
  },
};
</script>

<style>
.alal {
  width: 100%;
}
</style>