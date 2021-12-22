<template>
  <div class = contain>
    <a>팔로잉</a>
    <hr />
    <ul>
      <li  v-for="(u, i) in followees" :key="i">
        <span>
          <a>{{ u.followeeNickName }}&nbsp;&nbsp;</a>
          <div id="checkFollower">
          <button>팔로우 하기&nbsp;&nbsp;</button>
          <button>팔로잉 취소</button>
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
      followees: [],
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
      .get("/follow-user/" + feedownerId + "/followees", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.followees = res.data;
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