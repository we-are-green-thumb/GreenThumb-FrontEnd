<template>
  <div class="postDdetail">
    <v-card flat tile>
      <v-toolbar color="cyan" dark>

        <v-toolbar-title >{{tests.id}} test Title 제목</v-toolbar-title>

        <v-spacer></v-spacer>
       
      </v-toolbar>

      <v-container
        class="grey lighten-4"
        fluid
      >
        <v-row>
          <v-spacer></v-spacer>
            <v-card>
                <v-text>{{tests.id}} </v-text>
                <div style="float:right">
                    <v-text >{{tests.year}} </v-text>
                    <v-text >작성자 </v-text>
                    <v-btn> 별 </v-btn>
                </div>
                <br>
                <br>
                <br>
                <v-text >내용 : 튤립은 번식을 못한다? 이것도 맞는 말임 근데 사람들이 뭐 개량으로 번식능력을 없앴다더라 이런말도 꽤 하던데 </v-text>
                <!-- 이미지의 경우 몇개를 가지고 있는지 몰라 반복문으로 대체. -->
                <v-img
                    :src="`https://picsum.photos/200/300?image=${getImage()}`"
                    height="300px"
                >
                    <span
                    class="text-h5 white--text pl-4 pt-4 d-inline-block"
                    v-text="card"
                    ></span>
                </v-img>
                <v-text >{{tests.color}} </v-text>
                <v-text >{{tests.name}} </v-text>
                <v-text >조회수 {{tests.name}} </v-text>
                <br>
                <br>
                <div style="float:right">
                    <v-btn  >  <router-link :to="{name: 'EditPost' }" style="text-decoration:none; color: hsl(94, 10%, 46%);">작성자 일치 시 수정하기 버튼 활성화 </router-link></v-btn>
                    <v-btn> 하트 </v-btn>
                    <v-text >좋아요 20 </v-text>
                </div>

                <br><br>
                <hr>
            <comments></comments>
            </v-card>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import http from "@/util/http-common";
import comments from "../../components/post/Comment.vue"
export default {
    components:{
        comments,
    }
    ,
  data: () => ({
    types: ["Places to Be", "Places to See"],
    cards: ["Good", "Best", "Finest"],
    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
      },
      {
        icon: "mdi-linkedin",
        color: "cyan darken-1",
      },
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
    ],
    tests: [],
    // comments : [],
  }),

  methods: {
    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  created() {
    http
      .get("https://reqres.in/api/unknown/2") //게시글을 불러옴.
      .then((res) => {
        this.tests = res.data.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // //   http
    // //   .get("https://reqres.in/api/unknown") //댓글을 불러옴.
    // //   .then((res) => {
    // //     this.comments = res.data.data;
    // //     console.log(res);

    // //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>
<style>
.postDdetail {
  width: 100%;
}
</style>
