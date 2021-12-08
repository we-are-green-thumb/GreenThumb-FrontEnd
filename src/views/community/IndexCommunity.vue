<template>
  <div class="aaa">
    <plantHeader></plantHeader>
    <br /><br />
    <plantNav></plantNav>
    <br /><br />
    <br /><br />
    <hr size="5px">
    <comNav></comNav>
    <v-btn @click="test"> 클릭</v-btn>
  </div>
</template>
<script>
import Header from '../../components/Header.vue';
import NavigationBar from "../../components/NavigationBar.vue";
import CommunityNav from "../../components/community/CommunityNav.vue";
import axios from "axios";

export default {
    components : {
    "plantHeader":Header ,
    "plantNav":NavigationBar ,
    "comNav":CommunityNav,
    },
  methods: {
    test() {
      axios.get("http://127.0.0.1:80/user/1").then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        }).then(function () {
          // always executed
        });
    },
  },
};
</script>
<style>
.aaa{
  width: 100%;
}
</style>
