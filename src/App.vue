<template>
  <v-container fluid class="green">
    <v-app id="greenthumb">
      <v-system-bar app absolute hide-on-scroll color="#C8E6C9">
        <Header />
      </v-system-bar>
      <v-main class="grey lighten-3">
        <v-app-bar app absolute dense hide-on-scroll flat color="white">
          <v-tabs absolute centered class="white">
            <v-tab class="mainicon">
              <a href="http://localhost:8081/">
                <v-img
                  src="https://i.ibb.co/6yxTkKg/Green-Thumb.png"
                  height="64px"
                  width="146px"
                />
              </a>
            </v-tab>
            <v-tab v-if="isLogin === true">
              <router-link
                :to="{ name: 'IndexMyplant', params: { userId: userId } }"
                style="text-decoration: none; color: #388e3c; font-weight: bold"
              >
                내 식물
              </router-link>
            </v-tab>
            <!-- <v-tab v-if="isLogin === true">
            <router-link :to="{name: 'IndexMyplant, params:{userId : this.userId }}' }" style="text-decoration:none; color: hsl(94, 10%, 46%);">  내 식물 </router-link>
          </v-tab> -->
            <v-tab v-else>
              <router-link
                :to="{ name: 'loginform' }"
                style="text-decoration: none; color: #388e3c; font-weight: bold"
              >
                내 식물(로그인X)
              </router-link>
            </v-tab>
            <v-tab>
              <router-link
                :to="{ name: 'community' }"
                style="text-decoration: none; color: #388e3c; font-weight: bold"
              >
                커뮤니티
              </router-link>
            </v-tab>
            <v-tab>
              <router-link
                :to="{ name: 'Hospital' }"
                style="text-decoration: none; color: #388e3c; font-weight: bold"
              >
                식물병원
              </router-link>
            </v-tab>
            <v-tab>
              <a
                href="https://similarplant.netlify.app/"
                style="text-decoration: none; color: #659f7c; font-weight: bold"
                >식물MBTI</a
              >
            </v-tab>
          </v-tabs>
        </v-app-bar>
        <v-main>
          <v-row>
            <!--      rounded="lg" min-height="268" 두 옵션 없애도 되나?-->
            <v-col cols="12" lg="2" class="blue">
              <v-sheet color="white"></v-sheet>
            </v-col>
            <!--      min-height="70vh" rounded="lg" 두 옵션 없애도 되나?-->
            <v-col cols="12" lg="8">
              <v-sheet color="white" class="body">
                <router-view />
              </v-sheet>
            </v-col>
            <v-col cols="12" lg="2" class="blue">
              <v-sheet></v-sheet>
            </v-col>
          </v-row>
        </v-main>
      </v-main>
    </v-app>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header,
  },
  computed: {
    ...mapState(["userInfo"]),
    ...mapState(["isLogin"]),
  },
  data: () => ({
    userId: localStorage.getItem("getId"),
  }),
};
</script>
<style>
.body {
  width:100%;
}

.v-tab {
  font-size: 18px;
}
ol,
ul {
  list-style: none;
}

.mainicon {
  padding-right: 30%;
}

</style>