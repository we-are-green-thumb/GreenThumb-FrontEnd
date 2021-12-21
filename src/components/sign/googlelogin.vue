<template>
  <div style="text-align: center">
    <a
      href="http://localhost:80/oauth2/authorization/kakao?redirect_uri=http://localhost:8081/login/oauth2/code/kakao"
      class="kakao btn"
    >
      <i class="fas fa-comment"></i> 카카오로 로그인
    </a>
    <a
      href="http://localhost:80/oauth2/authorization/google?redirect_uri=http://localhost:8081/login/oauth2/code/google"
      class="google btn"
      ><i class="fab fa-google"></i> 구글로 로그인
    </a>
    <a
      href="http://localhost:80/oauth2/authorization/naver?redirect_uri=http://localhost:8081/login/oauth2/code/naver"
      class="naver btn"
      ><i class="fab fa-google"></i> 네이버로 로그인
    </a>
  </div>
</template>

<script>
import http from "@/util/http-common";

window.onload = function () {
  var getToken = document.location.href.split("/?token=");
  if (getToken[0] == "http://localhost:8081") {
    console.log(getToken);
    localStorage.setItem("getTk", getToken[1]);
    let gt = localStorage.getItem("getTk");
    http
      .post("/auth/login", { headers: { Authorization: `Bearer ${gt}` } })
      .then((res) => {
        let token = res.data.accessToken;
        let id = res.data.id;
        // let Bearer = res.data.tokenType;

        //일단 토큰 저장함
        localStorage.setItem("getToken", token);
        localStorage.setItem("getId", id);
        // localStorage.setItem("getB", Bearer);

        this.router.push({ name: "IndexMain" });
        localStorage.removeItem("getTk");
      });
  }
};

export default {};
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
  width: 700px;
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