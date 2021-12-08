<template>
  <div>
    <h2>회원 탈퇴</h2>
    <br><br>
    <h3>탈퇴하실 경우 회원 정보와 등록된 식물 정보가 모두 삭제 됩니다.</h3>
    <br><br>
    <div class="WidthdrawBtn">
      <v-btn  @click="changeCheck">회원탈퇴</v-btn>
      
    </div>
      <div class="WidthdrawBtn" v-if="!check">
        <br><br><br>
        <label for="pw">비밀번호를 입력하세요 </label>
        <input type="text" id="pw" name="pw" /><br /><br />
        <!-- <input  type="submit" value="Submit" > -->
        <v-btn >확인</v-btn>

      </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      check : "false"
    }
  },
  methods :{
    changeCheck :function (){
      this.check = !this.check;
    }

  }
};
</script>
<style>

.WidthdrawBtn {
  color: red;
  float: right;
}

</style>
