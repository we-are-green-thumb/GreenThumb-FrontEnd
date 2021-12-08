<template>
  <div width="100%">
    <plantHeader></plantHeader>
    <br /><br />
    <plantNav></plantNav>
    <br /><br />
    <br /><br />
    <hr size="5px" />
    <v-btn @click="test">클릭</v-btn>
    <comNav></comNav>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import NavigationBar from "../../components/NavigationBar.vue";
import CommunityNav from "../../components/community/CommunityNav.vue";
import axios from "axios";

export default {
data() {
    return {
        user:{
            name :"",
            age :""
        }
    }
},

  components: {
    plantHeader: Header,
    plantNav: NavigationBar,
    comNav: CommunityNav,
  },
  methods: {
    test() {
      axios.get("https://reqres.in/api/users?page=2").then(function (response) {
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
<style></style>
