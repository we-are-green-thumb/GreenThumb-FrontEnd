<template>
  <div>
    <!--10 커뮤니티  -->
    <section class="cate">
      <v-btn color="red" @click="clickFree">자유</v-btn>
      <v-btn color="red" @click="clickQuestion">질문</v-btn>
      <v-btn color="red" @click="clickTrade">나눔&거래</v-btn>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    clickFree() {},
    clickQuestion() {},
    clickTrade() {},
  },
};
</script>
<style>
.cate {
    width: 100%;
    float: left;
}
</style>
