<template>
  <div class="headerBtn">
    <section v-if="loginCheck">
        <router-link :to="{name:'loginform'}" style="text-decoration:none; color: hsl(94, 10%, 46%);" >로그아웃&nbsp;&nbsp;</router-link>
     <router-link :to="{name:'loginform'}" style="text-decoration:none; color: hsl(94, 10%, 46%);" >마이페이지</router-link> 
    </section>
    <section v-else>
        <router-link :to="{name:'loginform'}" style="text-decoration:none; color: hsl(94, 10%, 46%);" >로그인&nbsp;&nbsp;</router-link> 
        <router-link :to="{name:'loginform'}" style="text-decoration:none; color: hsl(94, 10%, 46%);" >회원가입</router-link> 
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

<style scoped>
.headerBtn {
  width: 100%;
  float: right;
  text-align: right;
  font-size:15px;
  color: hsl(94, 10%, 46%);
  text-decoration:none;
}


</style>
