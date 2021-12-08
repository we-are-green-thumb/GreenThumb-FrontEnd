<template>
  <div class="user" id="join">
    <div class="wrapCC mt-5">
      <h1>비밀번호를 찾아요</h1>
      <div class="input-label">
        <label for="email">이메일</label>
        <input
          id="email"
          placeholder="가입시 사용한 이메일을 입력."
          type="text"
        /><br />
        <div>이메일이 틀렸어요</div>
      </div>
      <br />
      <button>비밀번호 보내기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "findpassword",
};
</script>

<style scoped>
</style>