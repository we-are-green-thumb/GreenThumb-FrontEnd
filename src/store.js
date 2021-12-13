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
    login({ dispatch }, loginObj) {
      //로그인 후 토큰 반환
      http
      .post('https://reqres.in/api/login', loginObj)
      .then((res) => {
        let token = res.data.token
       
        //토큰 -> 멤버 정보 반환 .. 토큰만 저장해두면 새로고침해도 사용가능 local storage에 저장하자. 밑에 새로 만든다.

        // http
        // .get("https://reqres.in/api/users/2", config)
        // .then((response) => {
        //   let userInfo ={
        //     id: response.data.data.id,
        //     email: response.data.data.email
        //   }
        //   commit('loginSuccess', userInfo)
        //   router.push({name: "IndexMyplant"})
        // })
        
        //일단 토큰 저장함 
        localStorage.setItem("getToken", token)
        // sessionStorage.setItem("getToken",token)
        dispatch("getUserInfo")
        router.push({name: "IndexMyplant"})

         
    })
  },
  getUserInfo ({commit, dispatch}) {

    if(localStorage.getItem != null){
        //토큰 -> 멤버 정보 반환 .. 토큰만 저장해두면 새로고침해도 사용가능 local storage에 저장하자. 밑에 새로 만든다.
        let token = localStorage.getItem("getToken")

        let config = {
          headers: {
            "access-token" : token
          }
        }
        http
        .get("https://reqres.in/api/users/2", config)
        .then((response) => {
          let userInfo ={
            id: response.data.data.id,
            email: response.data.data.email
          }
          commit('loginSuccess', userInfo)
          .catch((error) => {
            console.log(error);
            alert('로그인을 실패했어요.')
          })
          .then(() => {
          }
        ) 
        })
        }else {
          console.log("로그아웃 성공")
          dispatch("logout")
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
    logout({commit}){
      alert('로그아웃 되었습니다.')
      localStorage.removeItem("getToken")
      localStorage.clear()
      commit("logouted")

      router.push({name: "IndexMain"})
    },
    
  }
})

  