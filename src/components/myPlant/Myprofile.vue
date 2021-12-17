<template>
  <div class="profileform">
    <ul>
      <li>
        <span>
          <router-link ></router-link>
          <p>{{ userNickname }}의 식물들!</p></span>

        <a class="followercheck" href="#">팔로우 추가</a>
      </li>
      <li>
        <span
          ><p>{{ userProfile }}</p></span
        >
      </li>
      <li>
        <span
          ><a href="#">팔로우: {{ followee }}</a></span
        >
      </li>
      <li>
        <span
          ><a href="#">팔로워: {{ follower }}</a></span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  data() {
    return {
      userNickname: "",
      userProfile: "",
      followee: "",
      follower: "",
      followers: [],
      followees: [],
    };
    
  },
   props: {
        userId : {
            type: String,
            default:''
      },
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    let id = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");
    http
      .get("user/" + id, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res);
        this.userNickname = res.data.nickName;
        this.userProfile = res.data.profile;
        this.followee = res.data.followeeCount;
        this.follower = res.data.followerCount;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
  methods: {
    //이제 버튼 누르면 이거 되게//
    getFollower() {
      let id = localStorage.getItem("getId");
      let token = localStorage.getItem("getToken");
      http
        .get("/follow/follower/" + id + "/following", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          // this.userNickname = res.data.nickName;
          // this.userProfile = res.data.profile;
          // this.followee = res.data.followeeCount;
          // this.follower = res.data.followerCount;
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
    },
  },
  getFollowee() {
    let id = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");
    http
      .get("/follow/followee/" + id + "/followers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        // this.userNickname = res.data.nickName;
        // this.userProfile = res.data.profile;
        // this.followee = res.data.followeeCount;
        // this.follower = res.data.followerCount;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
};
</script>

<style scoped>
.profileform {
  display: grid;
  margin: 0 10px 10px 5px;
}

.followercheck {
  float: right;
}

a {
  text-decoration: none;
  color: black;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>