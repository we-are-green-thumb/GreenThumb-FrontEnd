<template>

  <div style="text-align: center;">
        <a href="http://localhost:80/oauth2/authorization/kakao?redirect_uri=http://localhost:8081/login/oauth2/code/kakao" class="kakao btn">
          <i class="fas fa-comment"></i> 카카오로 회원가입 하기
         </a>
        <a href="http://localhost:80/oauth2/authorization/google?redirect_uri=http://localhost:8081/login/oauth2/code/google" class="google btn"><i class="fab fa-google"></i> 구글로 회원가입 하기
        </a>
        <a href="http://localhost:80/oauth2/authorization/naver?redirect_uri=http://localhost:8081/login/oauth2/code/naver" class="naver btn"><i class="fab fa-google"></i> 네이버로 회원가입 하기
        </a>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.col {
  float: left;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}
input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}
.google {
  background-color: #3d3130;
  color: white;
}

.kakao {
  background-color: #fffc33;
  color: rgb(68, 58, 0);
}

.naver {
  background-color: #02ff24;
  color: rgb(255, 255, 255);
}
input:hover,
.btn:hover {
  opacity: 1;
}
</style>