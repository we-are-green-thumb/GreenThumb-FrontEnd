<!-- 삭제 예정 -->
<template>
  <div>
      <div class="container1">
        <h1>회원가입</h1>
        <hr />
        <label for="email"><b>이메일</b></label>
        <input
          v-model="email"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        />
        <v-btn @click="checkcheckemail">중복체크</v-btn>

        <label for="psw"><b>비밀번호</b></label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label for="psw-repeat"><b>비밀번호 확인</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />

        <label for="email"><b>닉네임</b></label>
        <input
          v-model="name"
          type="text"
          placeholder="plant name"
          name="plant"
          required
        />

        <button v-on:keyup.13="submitForm()" type="submit" class="signupbtn" v-on:click="submitForm()">
          완료
        </button>
      </div>
      <socialSignIn />
  </div>
</template>

<script>
import socialSignIn from "../../components/sign/socialSignIn.vue";
import http from "@/util/http-common";
// import { mapState } from "vuex";

export default {
  components: {
    socialSignIn,
  },
  name: "SignupForm",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      plantName: "",
      introduce: "",
      allUsers: [],
    };
  },
  computed: {
    // ...mapState({ allUser: (state) => state.allUser }),
  },
  methods: {
    checkcheckemail() {
      this.allUsers = this.state.allUser;
      console.log(this.allUsers);
      // for (const user in this.allUser) {
      //   if(this.email === user.email){
      //     alert('중복입니다.')
      //   }
      // }
    },
    submitForm() {
      http
        .post("/auth/signup", {
          email: this.email,
          password: this.password,
          nickName: this.name,
        })
        .then((response) => {
          if(response.data.success == true){
            alert("회원가입 성공")
            this.$router.push({ name: 'loginform'})
          }else{
            alert("회원가입 실패")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
    },
};
</script>

<style scoped>
/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */

button:hover {
  opacity: 1;
}

/* Float cancel and signup buttons and add an equal width */
.signupbtn {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container1 {
  padding: 16px;
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>