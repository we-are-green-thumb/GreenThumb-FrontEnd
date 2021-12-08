<template>
  <div class="headerBtn">
    <nav v-if="loginCheck">
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >로그아웃</router-link> </v-btn>
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >마이페이지</router-link> </v-btn>
       <br><br><br>
    </nav>
    <nav v-else>
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >로그인</router-link> </v-btn>
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >회원가입</router-link> </v-btn>
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
  text-decoration:none
}


</style>
