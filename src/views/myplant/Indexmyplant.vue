<template>
  <div>
    <Myprofile />
    <MyplantRealList />
  </div>
</template>
<script>
// 내 식물 페이지
import MyplantRealList from "../../components/myPlant/MyplantRealList.vue";
import Myprofile from "../../components/myPlant/Myprofile.vue";

export default {
  name: "IndexMyplant",
  components: {
    Myprofile,
    MyplantRealList,
  },
  props: {
    userId: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style>
</style>