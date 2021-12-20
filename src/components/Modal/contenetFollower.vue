<template>
  <div class = contain>
    <a>팔로워</a>
    <hr />
    <ul>
      <li  v-for="(u, i) in followers" :key="i">
        <span>
          <a>{{ u.followerNickName }}</a>
          <div style="float:right">
          <button>팔로우 하기&nbsp;&nbsp;</button>
          <button>팔로우 취소</button>
          </div>
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
      tuserId: "",
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  props: {
    feedowner: {},
  },
  created() {
    let token = localStorage.getItem("getToken");
    let feedownerId = this.feedowner
    http
      .get("/follow-user/" + feedownerId + "/followers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.followers = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
      });
  },
};
</script>

<style scoped>

.contain {
  min-width: 400px;
  min-height: 700px;
  align-content: center;
  border-radius: 30px;
}
</style>