<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <v-form ref="form" v-model="form" class="white">
          <v-text-field
              v-model="email"
              :rules="[rules.email]"
              filled
              color="black"
              label="이메일"
              type="email"
          ></v-text-field>

          <v-text-field
              v-model="nickName"
              auto-grow
              filled
              color="black"
              label="닉네임"
              rows="1"
          ></v-text-field>

          <v-text-field
              v-model="password"
              :rules="[rules.password, rules.length(6)]"
              filled
              color="black"
              counter="6"
              label="패스워드"
              style="min-height: 96px"
              type="password"
          ></v-text-field>

          <v-text-field
              v-model="password2"
              :rules="[rules.password2]"
              filled
              color="black"
              counter="6"
              label="패스워드 확인"
              style="min-height: 96px"
              type="password"
          ></v-text-field>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text @click="$refs.form.reset()"> Clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn
              :disabled="!form"
              :loading="isLoading"
              class="white--text"
              color="deep-purple accent-4"
              depressed
              @click="submitForm"
          >
            Submit
          </v-btn>
        </v-card-actions>

        <socialSignIn/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socialSignIn from "../../components/sign/socialSignIn.vue";
import http from "@/util/http-common";
// import { mapState } from "vuex";

export default {
  components: {
    socialSignIn,
  },
  name      : "SignupForm",

  data() {
    return {
      agreement: false,
      nickName : '',
      dialog   : false,
      email    : '',
      form     : false,
      isLoading: false,
      password : '',
      password2: '',
      rules    : {
        email    : v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length   : len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password : v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
            'Password must contain an upper case letter, a numeric character, and a special character',
        password2: v => v === this.password || "패스워드가 일치하지 않습니다.",
        required : v => !!v || 'This field is required',
      },
    }
  },


  // computed: {
  // checkcheckemail(email) {
  //   const userData = this.$store.getters["get_userList"]; //아직 안만듬 전체 데이터 store.js에 구축.

  //   for (var i in userData) {
  //     var emailcheck = userData[i].email;
  //     if (email == emailcheck) {
  //       return "이미 사용중인 아이디에요.";
  //     }
  //   }
  //   return true;
  // },
  methods: {
    submitForm() {
      http
          .post("/auth/signup", {
            email   : this.email,
            password: this.password,
            nickName: this.nickName,
          })
          .then((response) => {
            if (response.data.success == true) {
              alert("회원가입 성공")
              this.$router.push({name: 'loginform'})
            } else {
              alert("회원가입 실패")
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },

  },

}
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