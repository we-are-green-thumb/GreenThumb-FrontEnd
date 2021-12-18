<!--<template>-->
<!--    <div id="header-wrap">-->
<!--      <div class="header-container">-->
<!--        <div class="headerBtn">-->
<!--          <section v-if="isLogin === true">-->
<!--            <div @click="logout">-->
<!--              <router-link :to="{name:'IndexMain'}" style="text-decoration:none; color: hsl(94, 10%, 46%);">로그아웃&nbsp;&nbsp;-->
<!--              </router-link>-->
<!--            </div>-->
<!--            <router-link :to="{name:'editpage'}" style="text-decoration:none; color: hsl(94, 10%, 46%);">마이페이지-->
<!--            </router-link>-->
<!--          </section>-->
<!--          <section v-else>-->
<!--            <router-link :to="{name:'loginform'}" style="text-decoration:none; color: white">로그인&nbsp;&nbsp;-->
<!--            </router-link>-->
<!--            <router-link :to="{name:'register'}" style="text-decoration:none; color: white">회원가입-->
<!--            </router-link>-->
<!--          </section>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import {mapActions, mapState} from 'vuex';-->

<!--export default {-->
<!--  name: "Header",-->
<!--  data() {-->
<!--    return {};-->
<!--  },-->
<!--  computed: {-->
<!--    ...mapState(["isLogin"])-->
<!--  },-->
<!--  methods : {-->
<!--    ...mapActions(["logout"])-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--#header-wrap {-->
<!--  position: relative;-->
<!--  background-color: white;-->
<!--}-->

<!--.header-container {-->
<!--  position: relative;-->
<!--  width: 1130px;-->
<!--  height: 100%;-->
<!--  margin: 0 auto;-->
<!--  background-color: #C6DFD6;-->
<!--}-->

<!--.headerBtn {-->
<!--  /*position: absolute;*/-->
<!--  font-size: 20px;-->
<!--  font-weight: bold;-->
<!--  color: white;-->
<!--  float: right;-->
<!--  text-align: center;-->
<!--  text-decoration: none;-->
<!--}-->

<!--</style>-->

<template>
  <div class="headerBtn">
    <section v-if="isLogin === true" >
      <div @click="logout">
        <router-link :to="{name:'IndexMain'}" style="text-decoration:none; color: hsl(94, 10%, 46%);"  >로그아웃&nbsp;&nbsp;</router-link>
      </div>
      <router-link :to="{name:'editpage'}" style="text-decoration:none; color: hsl(94, 10%, 46%);" >마이페이지</router-link>
    </section>
    <section v-else>
      <router-link :to="{name:'loginform'}" style="text-decoration:none; color: hsl(94, 10%, 46%);" >로그인&nbsp;&nbsp;</router-link>
      <router-link :to="{name:'register'}" style="text-decoration:none; color: hsl(94, 10%, 46%);" >회원가입</router-link>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
    };
  },
  computed : {
    ...mapState(["isLogin"])
  },
  methods : {
    ...mapActions(["logout"])
  }
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
