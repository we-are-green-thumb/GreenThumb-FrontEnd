import Vue from "vue";
import Vuex from "vuex";
import router from "./router/router";
// import http from "@/util/http-common"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      {
        userName: "follower123@naver.com",
        userPassword: "aa",
        userNickname: "팔로워1",
        userProfile: "안녕 내이름은 모아나",
      },
      {
        userName: "followee456@naver.com",
        userPassword: "aa",
        userNickname: "팔로위2",
        userProfile: "난 살식을 즐겨 ㅠ",
      },
    ],
    isLogin: false,
    isLonginError: false,
  },
  mutation: {
    //로그인 성공시  /payload 뜻.전송되는 데이터
    loginSuccess(state, payload) {
      state.isLogin = true
      console.log(state.isLogin)
      state.isLonginError = false
      console.log(state.isLonginError)
      state.userInfo = payload
      console.log(payload,'안녕')
    },
    //로그인 실패시
    loginFail(state) {
      state.isLogin = false
      state.isLonginError = true
    },
  },
  // 행위 시도
  actions: {
    login({ state, commit }, loginObj) {
      let selectUser = null
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
          router.push({name: "test" })
          console.log("도대체 이게 뭐야", selectUser)
        }
      }
    },
  },
});
