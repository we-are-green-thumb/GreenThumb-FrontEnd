<template>
  <div>
    <a>팔로워</a>
    <hr />
    <ul>
      <li>
        <span>
          <a>{{ followers.followerNickName }}</a>
          <button>팔로우 하기</button>
          <button>팔로우 취소</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import http from "@/util/http-common";

export default {
  data() {
    return {
      followers: [],
      followees: [],
      tuserId:"",
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  props: {
    usefeedowner: {
    }
    },
    // mounted: {
    //   getFollowee() {
    //     let token = localStorage.getItem("getToken");

    //     http
    //       .get("/follow-user/" + this.$route.params.feedowner + "/followees", {
    //         headers: { Authorization: `Bearer ${token}` },
    //       })
    //       .then((res) => {
    //         this.followees = res.data;
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //       .then(() => {
    //         this.$router.go(this.$router.currentRoute);
    //       });
    //   },
    // },
    created() {
      let token = localStorage.getItem("getToken");
      let id = localStorage.getItem("getId")
      this.tuserId =this.$router.params.userId
      console.log('tuser',this.tuserId)
      console.log('id',id)
      console.log('usefeedowner',this.usefeedowner)
      http
        .get("/follow-user/" + id + "/followers", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.followers = res.data;
          console.log(this.followers)
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          // this.$router.go(this.$router.currentRoute);
        });
    },
  
};
</script>

<style>
</style>