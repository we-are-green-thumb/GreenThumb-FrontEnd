<template>

  <v-container class="green" fluid>
    <v-app id="greenthumb">
  <v-app id="inspire">
    <v-container id="wrap">
    <v-system-bar app class="header-container">
      <Header/>
    </v-system-bar>
    <v-app-bar app color="white" height="50px" flat>
      <v-tabs centered class="ml-n9" color="blue">
        <v-tab>
          <a href="http://localhost:8081/">
            <v-img src="https://i.ibb.co/Ht8QTjH/image.png" height="64px" width="146px"/>
          </a>
        </v-tab>
        <v-tab v-if="isLogin === true">
          <router-link :to="{name: 'IndexMyplant' }" style="text-decoration:none; color: #659F7C; font-weight: bold;"> 내 식물
          </router-link>
        </v-tab>
        <!-- <v-tab v-if="isLogin === true">
          <router-link :to="{name: 'IndexMyplant, params:{userId : this.userId }}' }" style="text-decoration:none; color: hsl(94, 10%, 46%);">  내 식물 </router-link>
        </v-tab> -->
        <v-tab v-else>
          <router-link :to="{name: 'loginform' }" style="text-decoration:none; color: #659F7C; font-weight: bold;"> 내 식물 로그인X
          </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name: 'community' }" style="text-decoration:none; color: #659F7C; font-weight: bold;"> 커뮤니티
          </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name: 'Hospital' }" style="text-decoration:none; color: #659F7C; font-weight: bold;"> 식물병원
          </router-link>
        </v-tab>
        <v-tab>
          <a href="https://similarplant.netlify.app/" style="text-decoration:none; color: #659F7C; font-weight: bold;">식물MBTI</a>
        </v-tab>
      </v-tabs>
      <!-- <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar> -->
    </v-app-bar>
    </v-container>

      <v-system-bar app absolute color="#C8E6C9">
        <Header/>
      </v-system-bar>

      <v-app-bar app absolute dense hide-on-scroll flat color="white">
        <v-tabs absolute centered>
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
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" color="red"></v-sheet>
          </v-col>

          <!--      min-height="70vh" rounded="lg" 두 옵션 없애도 되나?-->
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg" color="red">

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
    Header
  },

  computed  : {
    ...mapState(["isLogin"])

  },
  data      : () => ({
    userId: localStorage.getItem('getId')
  }),
};
</script>

<style>

/*.header-wrap {*/
/*  overflow: hidden;*/
/*  min-width: 1130px;*/
/*  background-color: white;*/
/*}*/

/*.header-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-width: 1130px;
  height: 50px;
  margin: 0 auto;
  background-color: black;
}*/

ol, ul {
  list-style: none;
}
</style>
