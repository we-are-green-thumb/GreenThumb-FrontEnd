<template>
  <div>
    <!-- 9 회원수정  -->
    <!-- <MyPageNav></MyPageNav>
     -->
               <nav>
      <h6><h2>&nbsp;</h2></h6>
      <v-btn  color: black @click="editClick">회원정보 수정</v-btn>
      &nbsp;
      <v-btn  color: black @click="postClick">내가 쓴 글</v-btn>
      &nbsp;
      <v-btn  color: black @click="commentClick">내가 쓴 댓글</v-btn>
          </nav>
          
    <div v-if="editFlag">
    <MyInfo></MyInfo>
    <br /><br />
    <WithdrawUser></WithdrawUser>
    </div>
    <div v-if="postFlag">
      <MyPagePost></MyPagePost>
    </div>

    <div v-if="commentFlag">
      <MyPageComment></MyPageComment>
    </div>
    <plantFooter></plantFooter>
  </div>
</template>
<script>
import Footer from "../../components/Footer.vue";
// import MyPageNav from "../../components/myPage/MyPageNav.vue";
import MyInfo from "../../components/myPage/MyInfo.vue";
import MyPageComment from "../../components/myPage/MyPageComment.vue";
import MyPagePost from "../../components/myPage/MyPagePost.vue";
import WithdrawUser from "../../components/myPage/WithdrawUser.vue";
// import axios from "axios";

export default {
  name: "EditUser",
data() {
  return {
    editFlag :"false",
    postFlag :"false",
    commentFlag :"false",
  }
},
  components: {
    plantFooter: Footer,
    // MyPageNav: MyPageNav,
    MyInfo: MyInfo,
    WithdrawUser: WithdrawUser,
    MyPageComment,
    MyPagePost,
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
    editClick(){
      this.editFlag = true;
      this.postFlag = false;
    this.commentFlag = false;
    },
    postClick(){
      this.editFlag = false;
      this.postFlag = true;
    this.commentFlag = false
    },
    commentClick(){
 this.editFlag = false;
      this.postFlag = false;
    this.commentFlag = true;
    },

    created() {
      this.postFlag = false;
      this.commentFlag = false;
    },
    // test() {
    //   axios
    //     .get("https://reqres.in/api/users?page=2")
    //     .then(function (response) {
    //       // handle success
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(function () {
    //       // always executed
    //     });
    // },
  },
};
</script>
<style></style>
