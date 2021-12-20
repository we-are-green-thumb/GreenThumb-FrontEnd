<template>
  <div id="header-wrap">
    <div class="header-container">
      <div class="headerBtn">
        <section v-if="isLogin === true">
          <div @click="logout">
            <router-link :to="{name:'IndexMain'}" style="text-decoration:none; color: white; font-weight: bold">로그아웃&nbsp;&nbsp;
            </router-link>
          </div>
          <router-link :to="{name:'editpage'}" style="text-decoration:none; color: white; font-weight: bold">마이페이지
          </router-link>
        </section>
        <section v-else>
          <router-link :to="{name:'loginform'}" style="text-decoration:none; color: white; font-weight: bold">로그인&nbsp;&nbsp;
          </router-link>
          <router-link :to="{name:'register'}" style="text-decoration:none; color: white; font-weight: bold">회원가입
          </router-link>
        </section>
      </div>
    </div>
  </div>

  <!--  </div>-->
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods : {
    ...mapActions(["logout"])
  }
};
</script>

<style scoped>

#header-wrap {
  overflow: hidden;
  min-width: 1130px;
  background-color: white;
}

.header-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-width: 1130px;
  height: 50px;
  margin: 0 auto;
  background-color: black;
}

.headerBtn {
  float: right;
  text-align: right;
  font-size: 100%;
  color: white;
  background-color: red;
  text-decoration: none;
}


</style>
