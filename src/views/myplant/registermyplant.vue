<template>
  <div id="modalp">
    <h1>식물 등록 컴포넌트</h1>
    <modalPlantRegister
      v-if="isModalViewed" @close-modal="isModalViewed = false">
      <contentPlantRegister v-if="isModalViewed" @close-modal="isModalViewed = false" />
    </modalPlantRegister>
    <button @click="isModalViewed = true">오픈</button>
  </div>
</template>

<script>
import modalPlantRegister from "../../components/Modal/modalPlantRegister.vue";
import contentPlantRegister from "../../components/Modal/contentPlantRegister.vue";
export default {
  components: {
    modalPlantRegister,
    contentPlantRegister,
  },
  data() {
    return {
      isModalViewed: false,
    };
  },
};
</script>

<style scoped>
#modalp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>