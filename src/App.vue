<template>
  <v-app id="inspire">
    <v-system-bar app>
      <Header />
    </v-system-bar>
    <v-app-bar app color="white" flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <!-- <v-tab v-for="link in links" :key="link">
          <router-link :to="{name: '`{{link.path}}`' }" style="text-decoration:none"  >  {{ link.title }} </router-link>
        </v-tab> -->
        <v-tab>
          <router-link :to="{name: 'loginform' }" style="text-decoration:none; color: hsl(94, 10%, 46%);">  내 식물 </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name: 'community' }" style="text-decoration:none; color: hsl(94, 10%, 46%);"  >  커뮤니티 </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name: 'Hospital' }" style="text-decoration:none; color: hsl(94, 10%, 46%);"  > 식물병원</router-link>
        </v-tab>
      </v-tabs>
      <!-- <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar> -->
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268"> </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet> </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
  data: () => ({
  }),
};
</script>

<style scoped>
.v-tab {
  font-size: 18px;
}
</style>
