<template>
  <div class="mainCommunity">
    
    <SearchResult></SearchResult>
    <!-- <v-btn @click="test"> 클릭</v-btn> -->
  </div>
</template>
<script>
import SearchResult from "../../components/community/SearchResult.vue";
// import axios from "axios";

export default {
    components : {
    "SearchResult" : SearchResult,
    },
  methods: {
    
    // test() {
    //   axios.get("http://127.0.0.1:80/user/1").then(function (response) {
    //       console.log(response);
    //     }).catch(function (error) {
    //       console.log(error);
    //     }).then(function () {
    //       // always executed
    //     });
    // },

  },
};
</script>
<style>
.mainCommunity{
  width: 100%;
}
</style>
