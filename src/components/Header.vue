<template>
  <div class="headerBtn">
    <nav v-if="loginCheck">
      <button>로그아웃</button>
      <button>마이페이지</button>
       <br><br><br>
    </nav>
    <nav v-else>
      <router-link :to="{name:'loginform'}">로그인</router-link>
      <router-link :to="{name:'register'}">회원가입</router-link>
      <br><br><br>
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
  float: left;
  /* float: right; */

}


</style>
