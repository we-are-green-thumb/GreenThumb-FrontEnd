import Vue from "vue";
import Vuex from "vuex";
import router from "./router/router";
import http from "@/util/http-common";


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
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    //로그인 실패시
    loginFail(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logouted(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  getters: {
    loginCheck: function (state) {
      http
        .get("/user")
        .then((res) => {
          // console.log(res.data);
          return (state.allUsers = res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
    },
  },
  // 행위 시도
  actions: {
    login({ dispatch }, loginObj) {
      let email = loginObj.email;
      let password = loginObj.password;

      //로그인 후 토큰 반환
      http
        .post("/auth/login", { email: email, password: password })
        .then((res) => {
          let token = res.data.accessToken;
          let id = res.data.userId;

          //일단 토큰 저장함
          localStorage.setItem("getToken", token);
          localStorage.setItem("getId", id);

          // sessionStorage.setItem("getToken",token)
          dispatch("getUserInfo");
          router.push({ name: "IndexMain" });
        });
    },
    getUserInfo({ commit }) {
      if (localStorage.getItem("getToken") !== null) {
        //토큰 -> 멤버 정보 반환 .. 토큰만 저장해두면 새로고침해도 사용가능 local storage에 저장하자. 밑에 새로 만든다.
        let token = localStorage.getItem("getToken");
        let id = localStorage.getItem("getId");
        // let Bearer = localStorage.getItem("getB")
        // let config = {
        //   headers: {
        //     Authorization: token,
        //   },
        // };

        http
          .get("/user/" + id, { headers: { Authorization: `Bearer ${token}` } })
          .then((response) => {
            console.log(response);
            let userInfo = {
              userId: id,
              email: response.data.email,
            };
            commit("loginSuccess", userInfo)
              .catch((error) => {
                console.log(error);
                alert("로그인을 실패했어요.");
              })
              .then(() => {});
          });
      } else {
        commit("logouted");
        // console.log("로그아웃 성공")
      }
    },

    // // 데이터를 넣는 부분이 메소드
    // let selectUser = null
    // state.allUsers.forEach((user) => {
    //   if (user.userName === loginObj.email) selectUser = user
    // })
    // if (selectUser === null)
    //   alert("존재하지 않는 아이디에요.") & commit("loginFail")
    // else {
    //   if (selectUser.userPassword !== loginObj.password)
    //     alert("아이디와 비밀번호가 일치하지 않아요.") & commit("loginFail")
    //   else {
    //     alert("로그인이 완료되었습니다.")
    //     commit("loginSuccess", selectUser)
    //     router.push({name: "IndexMyplant"})
    //   }
    // }
    // },
    logout({ commit }) {
      alert("로그아웃 되었습니다.");
      let token = localStorage.getItem("getToken");
      let userId = localStorage.getItem("getId");
      http
//       .delete("/auth/logout",  { headers: { Authorization: `Bearer ${token}` }})
      .post("http://localhost:80/auth/logout/"+userId,{ headers: { Authorization: `Bearer ${token}` }} )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      
      localStorage.removeItem("getToken");
      localStorage.clear();
      commit("logouted");
      router.push({ name: "IndexMain" });
    },
  },
});
