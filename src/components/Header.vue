<template>
  <div class="headerBtn">
    <nav v-if="loginCheck">
      <button>로그아웃</button>
      <button>마이페이지</button>
    </nav>
    <nav v-else>
      <button>로그인</button>
      <button>회원가입</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loginCheck: false,
    };
  },
};
</script>

<style>
.headerBtn {
  float: right;
}
</style>
