<template>
  <div>
      <form class="modal-content1" >
    <div class="container1">
      <h1>회원가입</h1>
      <hr>
      <label for="email"><b>이메일</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>비밀번호</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>비밀번호 확인</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
   
      <label for="email"><b>관심있는 식물</b></label>
      <input type="text" placeholder="plant name" name="plant" required>
        
      <button type="submit" class="signupbtn">완료</button>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      plantName: "",
    };
  },
  methods: {
    submitForm() {
      console.log("dd");
    },
  },
};
</script>

<style >
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */


button:hover {
  opacity:1;
}


/* Float cancel and signup buttons and add an equal width */
.signupbtn {
  background-color: #04AA6D;
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