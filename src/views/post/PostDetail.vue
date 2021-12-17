<template>
  <div class="postDdetail">
    <v-card flat tile>
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>{{ post.title }}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-container class="grey lighten-4" fluid>
        <v-row>
          <v-spacer></v-spacer>
          <v-card>
            <div style="float: right">
              <v-text>{{ post.year }} </v-text>
              <v-text>작성자 {{ post.writer }}</v-text>
            </div>
            <br />
            <br />
            <br />
            <v-text>{{ post.content }} </v-text>
            <!-- 이미지의 경우 몇개를 가지고 있는지 몰라 반복문으로 대체. file이 있을 경우 ..  -->
            <v-img
                    :src="`${post.fileList[0].fileUrl}`"
                    height="300px"
                    width="700px"
                >
                    <span
                    class="text-h5 white--text pl-4 pt-4 d-inline-block"
                    v-text="card"
                    ></span>
                </v-img>
            <br />
            <v-text>조회수 {{ post.hits }} </v-text>
            <br />
            <br />
            <div style="float: right">
              <div>
                <v-btn>
                  <router-link
                    :to="{ name: 'EditPost' }"
                    style="text-decoration: none; color: hsl(94, 10%, 46%)"
                    >작성자 일치 시 수정하기 버튼 활성화
                  </router-link></v-btn
                >
              </div>
              <v-btn @click="clickLike">하트(좋아요 추가)</v-btn>

              <!-- 좋아요 -->
              <div v-if="like === '좋아요 완료'">
                <v-text> {{ post.like + 1 }} </v-text>
              </div>
              <div v-else>
                <v-text> {{ post.like }} </v-text>
              </div>
            </div>

            <br /><br />
            <hr />

            <!-- 댓글 영역 -->

            <div>
              <h2>댓글 {{ comments.length }}</h2>

              <v-btn style="float: right"
                ><router-link
                  :to="{ name: 'WriteComment' }"
                  style="text-decoration: none; color: hsl(94, 10%, 46%)"
                  >댓글 등록
                </router-link></v-btn
              >
              <br /><br />
              <ul>
                <li v-for="(comment, idx) in comments" :key="idx">
                  {{ comment.content }} "Places to Be", "Places to See"
                  mdi-facebook cyan darken-1<!-- 내용 -->
                  {{ comment.year
                  }}<!-- 작성일 -->
                  {{ comment.color
                  }}<!-- 작성자 -->
                  <v-btn>
                    <router-link
                      :to="{ name: 'EditComment' }"
                      style="text-decoration: none; color: hsl(94, 10%, 46%)"
                      >작성자 일치 시 수정하기 버튼 활성화
                    </router-link></v-btn
                  >
                  <br />
                  <v-btn>하트</v-btn>

                  좋아요 {{ comment.like
                  }}<!-- 좋아요 수-->
                </li>
              </ul>
            </div>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import http from "@/util/http-common";
// import comments from "../../components/post/Comment.vue"
export default {
  components: {
    // comments,
  },
  data: () => ({
    post: [],
    comments: [],
    props: {
      postId: {
        type: String,
        default: "",
      },
      userId: {
        type: String,
        default: "",
      },
    },
    resultPost: [],
    like: "",
  }),

  methods: {
    clickLike() {
      let token = localStorage.getItem("getToken");
      let userId = localStorage.getItem("getId");
      let postId = this.$route.params.postId;
      console.log(postId);
      //좋아요 추가 메소드
      http
        .post(
          "http://localhost:80/post/" + postId + "/user/" + userId + "/like",
          null,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res);
          this.like = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    // let userId = localStorage.getItem("getId");
    let token = localStorage.getItem("getToken");

    // 게시글
    http
      .get("http://localhost:80/post/" + this.$route.params.postId, {
        headers: { Authorization: `Bearer ${token}` },
      }) //게시글을 불러옴.
      .then((res) => {
        this.post = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    http
      .get(
        "http://localhost:80/comment/post/" +
          this.$route.params.postId +
          "/comments",
        { headers: { Authorization: `Bearer ${token}` } }
      ) //댓글을 불러옴.
      .then((res) => {
        this.comments = res.data;
        console.log(this.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
.postDdetail {
  width: 100%;
}
</style>
