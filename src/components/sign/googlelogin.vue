<template>
  <div style="text-align: center;">
        <a href="#" class="kakao btn">
          <i class="fas fa-comment"></i> 카카오로 로그인하기
         </a>
        <a href="#" class="google btn"><i class="fab fa-google"></i> 구글로 로그인하기
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

input:hover,
.btn:hover {
  opacity: 1;
}
</style>