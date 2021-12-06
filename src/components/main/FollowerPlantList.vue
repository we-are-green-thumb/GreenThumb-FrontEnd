<template>
  <div>
    <h1>친구들의 식물을 살펴볼까요?</h1>
    <div class="imageList" v-if="loginCheck">
      <img src="../../assets/images/sample_01.png" width="200" height="200" />
      <img src="../../assets/images/sample_01.png" width="200" height="200" />
    </div>
    <div class="imageList" v-else>
      <img src="../../assets/images/sample_02.png" width="200" height="200" />
      <img src="../../assets/images/sample_02.png" width="200" height="200" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowerPlantList",
  data() {
    return {
      loginCheck: "false",
    };
  },
};
</script>

<style>
.imageList {
  text-align: center;
}
</style>
