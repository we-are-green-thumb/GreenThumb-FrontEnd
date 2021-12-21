<template>
  <div class="postDdetail">
    <v-card flat tile class="body">
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>{{ post.title }}</v-toolbar-title>
      </v-toolbar>

      <v-container class="grey lighten-4" fluid>
        <v-row>
          <v-card class="body" style="padding: 40px">
            <div style="float: left; width=50%">
              <b
                ><v-text>작성자 {{ post.writer }}</v-text></b
              >
              <br />
            </div>
            <div style="float: right; width=50%">
              <v-text>조회수 {{ post.hits }} </v-text>
              <div v-if="like === '좋아요 완료'">
                <v-text>좋아요 {{ post.like + 1 }} </v-text>
              </div>
              <div v-else>
                <v-text>좋아요 {{ post.like }} </v-text>
              </div>
            </div>
            <br /><br />
            <div style="height: 60%">
              <v-text>{{ post.content }} </v-text>
            </div>
            <br><br>
            <!-- 이미지의 경우 몇개를 가지고 있는지 몰라 반복문으로 대체. file이 있을 경우 ..  -->
            <v-img :src="`${post.fileUrl}`" style="max-width: 300px; height: auto;">
              <span
                class="text-h5 white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
              
            </v-img><br>
            <div style="float: left; width: 50%; padding-top: 12px">
              <v-img
                max-height="30px"
                max-width="30px"
                src="https://i.ibb.co/9tYsbv4/like.png"
                @click="clickLike"
              ></v-img>
            </div>
            <div style="width: 50%; padding-left: 20%">
              <div v-if="chekcWrite">
                <v-btn class="btn">
                  <!--수정이 필요하다 --><!--수정이 필요하다 --><!--수정이 필요하다 --><!--수정이 필요하다 -->
                  <router-link
                    :to="{ name: 'EditPost' ,
                    params: { postId : this.postId}}" 
                    style="text-decoration: none; color: hsl(94, 10%, 46%)"
                    >수정하기
                  </router-link>
                </v-btn>
                <v-btn class="btn">
                  <router-link
                    :to="{ name: 'WriteComment' ,
                    params: { postId : this.postId}}"
                    style="text-decoration: none; color: hsl(94, 10%, 46%)"
                    >댓글 등록
                  </router-link>
                </v-btn>
              </div>
            </div>

            <br /><br /><br /><br />
            <hr />

            <!-- 댓글 영역 -->

            <!-- <div> -->
            <br />
            <h2>댓글 {{ comments.length }}</h2>
            <br />
            <v-card class="comment">
              <v-li v-for="(comment, idx) in comments" :key="idx">
                <hr />
                <b>작성자 : {{ comment.writer }}</b>
                <br />
                {{ comment.content }}
                <hr />
                <br />
              </v-li>
            </v-card>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

// import comments from "../../components/post/Comment.vue"
export default {
  components: {
    // comments,
  },
  computed: {
    ...mapState(["isLogin"]),
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
    writerId: "",
    logId: "",
    chekcWrite: false,
  }),

  methods: {
    // clickComment(){
    //   let postid = this.$route.params.postId;
    //   this.$router.push({name : 'WriteComment' ,params: { postid: postid }})
    // },
    clickLike() {
      let token = localStorage.getItem("getToken");
      let userId = localStorage.getItem("getId");
      let postId = this.$route.params.postId;
      console.log('포스트flike',postId);
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
          // console.log(res);
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
    // let postId = this.$route.params.postIdthis.$route.params.postId;
    // console.log("=================");
    // console.log(postId);
    // 게시글
    http
      .get("http://localhost:80/post/" + this.$route.params.postId, {
        headers: { Authorization: `Bearer ${token}` },
      }) //게시글을 불러옴.
      .then((res) => {
        this.post = res.data;
        console.log(this.post)
        this.writerId = res.data.writerId;
        this.logId = localStorage.getItem("getId");

        if (this.writerId == this.logId) {
          this.chekcWrite = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    http
      .get(
        "http://localhost:80/post/" + this.$route.params.postId + "/comments",
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
<style scoped>
.postDdetail {
  width: 100%;
}

.body {
  align-content: center;
  width: 100%;
  height: 50%;
  padding: 50px 13% 10px 13%;
}

.comment {
  padding: 24px;
}

.btn {
  margin-left: 7px;
  margin-right: 7px;
}

/* 화면 너비가 0 ~ 1280px : 데스크탑 */
@media (max-width: 1280px) {
  body {
    background: #880e4f;
  }
  h1::before {
    content: "2. ";
  }
  h1::after {
    content: " - 1025px ~ 1280px";
  }
}

/* 화면 너비가 0 ~ 1024px : 데스크탑 */
@media (max-width: 1024px) {
  body {
    background: #4a148c;
  }
  h1::before {
    content: "3. ";
  }
  h1::after {
    content: " - 961px ~ 1024px";
  }
}

/* 화면 너비가 0 ~ 960px : 노트북 */
@media (max-width: 960px) {
  body {
    background: #311b92;
  }
  h1::before {
    content: "4. ";
  }
  h1::after {
    content: " - 769px ~ 960px";
  }
}

/* 화면 너비가 0 ~ 768 : 타블렛 */
@media (max-width: 768px) {
  body {
    background: #4a148c;
  }
  h1::before {
    content: "5. ";
  }
  h1::after {
    content: " - 577px ~ 768px";
  }
}

/* 화면 너비가 0 ~ 576 : 모바일 */
@media (max-width: 576px) {
  body {
    background: #004d40;
  }
  h1::before {
    content: "6. ";
  }
  h1::after {
    content: " - 0px ~ 576px";
  }
}
</style>
