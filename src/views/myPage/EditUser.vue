<template>
  <div>
    <!-- 9 회원수정  -->
    <plantHeader></plantHeader>
    <br /><br />
    <plantNav></plantNav>
    <br /><br />
    <hr size="5px" />
    <MyPageNav></MyPageNav>
    <br /><br />
    <MyInfo></MyInfo>
    <br /><br />

    <WithdrawUser></WithdrawUser>
    <!-- <LeftSideBar></LeftSideBar> -->
    <plantFooter></plantFooter>
  </div>
</template>
<script>
import Footer from "../../components/Footer.vue";
import Header from "../../components/Header.vue";
import NavigationBar from "../../components/NavigationBar.vue";
// import LeftSideBar from '../../components/myPage/LeftSideBar.vue';
import MyPageNav from "../../components/myPage/MyPageNav.vue";
import MyInfo from "../../components/myPage/MyInfo.vue";
import WithdrawUser from "../../components/myPage/WithdrawUser.vue";
import axios from "axios";

export default {
  name: "EditUser",

  components: {
    plantHeader: Header,
    plantNav: NavigationBar,
    plantFooter: Footer,
    // "LeftSideBar":LeftSideBar,
    MyPageNav: MyPageNav,
    MyInfo: MyInfo,
    WithdrawUser: WithdrawUser,
  },
// 해당 코드 router에서 처리함
  // beforeRouteEnter(to, from, next) {
  //   if (from.path === "/mypage") {
  //     next();
  //   } else {
  //     next("/");
  //   }
  // },
  methods: {
    test() {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>
<style></style>
