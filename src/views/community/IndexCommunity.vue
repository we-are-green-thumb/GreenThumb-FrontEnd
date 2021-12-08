<template>
  <div class="aaa">
    <!-- <plantHeader></plantHeader>
    <br /><br />
    <plantNav></plantNav>
    <br /><br />
    <br /><br /> -->
    <hr size="5px">

    <comNav></comNav>
  </div>
</template>
<script>
// import Header from '../../components/Header.vue';
// import NavigationBar from "../../components/NavigationBar.vue";
import CommunityNav from "../../components/community/CommunityNav.vue";

export default {
    components : {
    // "plantHeader":Header ,
    // "plantNav":NavigationBar ,
    "comNav":CommunityNav,

    }
}
</script>
<style>
.aaa{
  width: 100%;
}
</style>
