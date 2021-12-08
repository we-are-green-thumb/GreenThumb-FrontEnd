<template>
  <div class="headerBtn">
    <nav v-if="loginCheck">
      <!-- <button>로그아웃</button>
      <button>마이페이지</button> -->
      <v-btn color="red">로그아웃</v-btn>
      <v-btn color="red">마이페이지</v-btn>
       <br><br><br>
    </nav>
    <nav v-else>
     <!-- <v-btn color="red">로그인</v-btn>
      <v-btn color="red">회원가입</v-btn> -->
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
  /* float: left; */
  float: right;
  text-align: right;
}


</style>
