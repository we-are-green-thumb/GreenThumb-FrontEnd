import Vue from "vue";
import Vuex from "vuex";
import router from "./router/router";
import http from "@/util/http-common"

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    userInfo: null,
    allUsers: [],
    isLogin: false,
    isLoginError: false,
  
  },
  mutations: {
    //로그인 성공시  /payload 뜻.전송되는 데이터
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    //로그인 실패시
    loginFail(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logouted(state){
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  getters : {
    loginCheck: function (state){
      http
            .get("/user")
            .then((res) => {
              console.log(res.data);
              return state.allUsers = res.data;
            })
            .catch((err) => {
              console.log(err);
            })
            .then(() => {});
    }
  },
  // 행위 시도
  actions: {
    login({ state, commit }, loginObj) {
      // 데이터를 넣는 부분이 메소드
      let selectUser = null
      console.log(state.allUsers);
      state.allUsers.forEach((user) => {
        if (user.userName === loginObj.email) selectUser = user
      })
      if (selectUser === null)
        alert("존재하지 않는 아이디에요.") & commit("loginFail")
      else {
        if (selectUser.userPassword !== loginObj.password)
          alert("아이디와 비밀번호가 일치하지 않아요.") & commit("loginFail")
        else {
          alert("로그인이 완료되었습니다.")
          commit("loginSuccess", selectUser)
          router.push({name: "IndexMyplant"})
        }
      }
    },
    logout({commit}){
      alert('로그아웃 되었습니다.')
      commit("logouted")
      router.push({name: "IndexMain"})
    }
    
  },
});
