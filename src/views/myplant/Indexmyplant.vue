<!-- 내식물 -->
<template>
  <div class="place">
    <div class="profileform">
      <ul>
        <li>
          <span
            ><p>{{ User.nickName }}의 식물들!</p></span
          >
          <a class="followercheck" @click="followerupdate" v-if="canFollow"
            >팔로우 추가</a
          >
          <a class="followercheck" @click="followerdelete" v-if="canFollow"
            >팔로우 취소</a
          >
        </li>
        <li>
          <span
            ><p>{{ User.profile }}</p></span
          >
        </li>
        <li>
          <span
            ><button @click="isModalViewed1 = true">
              팔로워: {{ User.followeeCount }}
            </button></span
          >
        </li>
        <li>
          <span
            ><button @click="isModalViewed2 = true">
              팔로우: {{ User.followerCount }}
            </button></span
          >
        </li>
      </ul>
    </div>
    <!--팔로우 모달-->
    <modalPlantRegister
      v-if="isModalViewed1"
      @close-modal="isModalViewed1 = false"
    >
      <contenetfollower :feedowner="User.userId" />
    </modalPlantRegister>
    <!--팔로잉 모달-->
    <modalPlantRegister
      v-if="isModalViewed2"
      @close-modal="isModalViewed2 = false"
    >
      <contenetfollowee :feedowner="User.userId" />
    </modalPlantRegister>

    <!-- 식물 등록 모달 -->
    <ul class="myplantcontainer">
      <li class="myplantform" v-if="canRegister">
        <div id="modalp">
          <h1>식물 등록 컴포넌트</h1>
          <modalPlantRegister
            v-if="isModalViewed"
            @close-modal="isModalViewed = false"
          >
            <contentPlantRegister />
          </modalPlantRegister>
          <button @click="isModalViewed = true">식물 등록</button>
        </div>
      </li>

      <!-- 내 식물 리스트 --->
      <div v-for="(u, i) in myplants" :key="i">
        <router-link
          :to="{
            name: 'Detailmyplant',
            params: { userId: u.userId, plantId: u.plantId },
          }"
        >
          <li class="myplantform">
            <div>
              <img class="imgSize" :src="u.imageUrl" />
            </div>
            <div class="plantcontent">
              <h3>{{ u.name }}</h3>
              <a> {{ u.water }}일 뒤 물을 주세요! </a><br />
              <a> 온도는 {{ u.temp }}도가 딱이에요! </a><br />
            </div>
          </li>
        </router-link>
      </div>
    </ul>
  </div>
</template>

<script>
// 내 식물 페이지

import modalPlantRegister from "../../components/Modal/modalPlantRegister.vue";
import contentPlantRegister from "../../components/Modal/contentPlantRegister.vue";
import http from "@/util/http-common";
import { mapState } from "vuex";
import contenetfollower from "../../components/Modal/contenetFollower.vue";
import contenetfollowee from "../../components/Modal/contentFollowee.vue";

export default {
  name: "IndexMyplant",

  data() {
    return {
      myplants: [],
      User: [],
      isModalViewed: false,
      isModalViewed1: false,
      isModalViewed2: false,
      canRegister: true,
      canFollow: true,
    };
  },
  props: {
    userId: {},
    plantId: {},
  },
  computed: {
    ...mapState(["myplant"]),
    ...mapState(["userInfo"]),
  },
  components: {
    modalPlantRegister,
    contentPlantRegister,
    contenetfollower,
    contenetfollowee,
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.$router.go(this.$router.currentRoute);
      }
    },
  },
  created() {
    let id = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");
    http
      .get("user/" + this.$route.params.userId + "/plants", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.myplants = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});

    http
      .get("user/" + this.$route.params.userId + "/feed", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.User = response.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});

    if (id === this.$route.params.userId) {
      (this.canRegister = true), (this.canFollow = false);
    } else {
      (this.canRegister = false), (this.canFollow = true);
    }
  },
  methods: {
    followerupdate() {
      let token = localStorage.getItem("getToken");
      http
        .post(
          "user/" +
            this.$store.state.userInfo.userId +
            "/followee/" +
            this.$route.params.userId +
            "/follow",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$router.go(this.$router.currentRoute);
        });
    },
    followerdelete() {
      let token = localStorage.getItem("getToken");
      http
        .delete(
          "user/" +
            this.$store.state.userInfo.userId +
            "/followee/" +
            this.$route.params.userId +
            "/follow",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$router.go(this.$router.currentRoute);
        });
    },
  },
};
</script>

<style scoped>
.myplantcontainer {
  display: grid;
  grid-template-columns: 450px 450px;
}

ul {
  margin: 0;
  padding: 0 0 0 10px;
}

.myplantform {
  background-color: lightgrey;
  border-radius: 15px;
  margin: 0 10px 10px 5px;
}
.imgSize {
  width: 160px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
}

.plantcontent {
  float: center;
  width: 60%;
  height: 120px;
  vertical-align: 70px;
  text-align: left;
  font-size: 15px;
  padding: 5px 16px 0 10px;
}

.myplantBtn {
  all: unset;
  cursor: pointer;
}
#modalp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
</style>