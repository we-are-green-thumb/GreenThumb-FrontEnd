<template>
  <v-container fluid class="green">
    <v-app id="greenthumb">
      <v-system-bar app absolute hide-on-scroll color="#C8E6C9">
        <Header/>
      </v-system-bar>

      <v-app-bar app absolute dense hide-on-scroll flat color="white">
        <v-tabs absolute centered class="purple">
          <v-tab>
            <a href="http://localhost:8081/">
              <v-img src="https://i.ibb.co/6yxTkKg/Green-Thumb.png" height="64px" width="146px"/>
            </a>
          </v-tab>
          <v-tab v-if="isLogin === true">
            <router-link :to="{name: 'IndexMyplant' }" style="text-decoration:none; color: #388E3C; font-weight: bold;">
              내 식물
            </router-link>
          </v-tab>
          <!-- <v-tab v-if="isLogin === true">
            <router-link :to="{name: 'IndexMyplant, params:{userId : this.userId }}' }" style="text-decoration:none; color: hsl(94, 10%, 46%);">  내 식물 </router-link>
          </v-tab> -->
          <v-tab v-else>
            <router-link :to="{name: 'loginform' }" style="text-decoration:none; color: #388E3C; font-weight: bold;">
              내 식물(로그인X)
            </router-link>
          </v-tab>
          <v-tab>
            <router-link :to="{name: 'community' }" style="text-decoration:none; color: #388E3C; font-weight: bold;">
              커뮤니티
            </router-link>
          </v-tab>
          <v-tab>
            <router-link :to="{name: 'Hospital' }" style="text-decoration:none; color: #388E3C; font-weight: bold;">
              식물병원
            </router-link>
          </v-tab>
          <v-tab>
            <a href="https://similarplant.netlify.app/"
               style="text-decoration:none; color: #659F7C; font-weight: bold;">식물MBTI</a>
          </v-tab>
        </v-tabs>
      </v-app-bar>

      <v-main class="blue">
        <v-row>
          <!--      rounded="lg" min-height="268"-->
          <v-col cols="12" lg="2">
            <v-sheet color="white"></v-sheet>
          </v-col>

          <!--      min-height="70vh" rounded="lg" 두 옵션 없애도 되나?-->
          <v-col cols="12" lg="8">
            <v-sheet color="red">
              <router-view/>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet></v-sheet>
          </v-col>

        </v-row>
      </v-main>

    </v-app>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';
import Header from "./components/Header";

export default {
  name      : "app",
  components: {
    Header,
  },
  computed  : {
    ...mapState(["userInfo"]),
    ...mapState(["isLogin"])

  },
  data      : () => ({
    userId: localStorage.getItem('getId')
  }),

};
</script>

<style>
.v-tab {
  font-size: 18px;
}

ol, ul {
  list-style: none;
}
</style>
