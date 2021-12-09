import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      http
        .get("/user")
        .then((res) => {
          this.state.allUsers = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {}),
    ],
    isLogin: false,
    isLonginError: false,
  },
  mutation: {
    //로그인 성공시
    loginSuccess(state) {
      state.isLogin = true;
      state.isLonginError = false;
    },
    //로그인 실패시
    loginFail(state) {
      state.isLogin = false;
      state.isLonginError = true;
    },
  },
  actions: {
    login({ state, commit }, loginObj) {
      let selectUser = null;
      state.allUsers.forEach((user) => {
        if (user.userName === loginObj.email) selectUser = user;
      });
      if (selectUser === null) alert("존재하지 않는 아이디에요.") & commit('loginFail')
      else {
        selectUser.userPassword !== loginObj.password
          ? alert("아이디와 비밀번호가 일치하지 않아요.")& commit('loginFail')
          : alert("로그인이 완료되었습니다.") & commit('loginSuccess' )
        }
    },
  },

});
