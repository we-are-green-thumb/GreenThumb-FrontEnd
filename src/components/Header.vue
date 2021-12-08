<template>
  <div class="headerBtn">
    <section v-if="loginCheck">
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >로그아웃</router-link> </v-btn>
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >마이페이지</router-link> </v-btn>
       <br><br><br>
    </section>
    <section v-else>
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >로그인</router-link> </v-btn>
      <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >회원가입</router-link> </v-btn>
      <br><br><br>
    </section>
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
  width: 100%;
  float: right;
  text-align: right;
  text-decoration:none
}
 hr {
  background-color: #009900;
}

</style>
