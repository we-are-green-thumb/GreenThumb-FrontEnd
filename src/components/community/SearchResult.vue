<template>
  <div class="card">
    <v-btn @click="clickFree">자유</v-btn>
    <v-btn @click="clickQuestion">질문</v-btn>
    <v-btn @click="clickTrade">나눔&거래</v-btn>

    <v-btn
      style="float: right"
      v-if="isLogin"
      router-link
      :to="{ name: 'WritePost' }"
    >
      글 쓰기
    </v-btn>

    <h3>궁금한 것을 물어보세요</h3>
    <v-card class="card">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="posts"
          :search="search"
          @click:row="clicketest"
          expand
        ></v-data-table>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLogin"]),
  },
  components: {},
  data() {
    return {
      search: "",
      headers: [
        {
          text: "제목",
          align: "start",
          filterable: true,
          value: "title",
          width: "300px",
        },
        { text: "내용", value: "content", width: "400px" },
        { text: "작성자", value: "writer", width: "200px", align: "center" },
        { text: "조회수", value: "hits", width: "100px", align: "center" },
        { text: "좋아요", value: "like", width: "100px", align: "center" },
      ],
      posts: [],
    };
  },
  created() {
    let token = localStorage.getItem("getToken");
    http
      .get("/posts/", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        this.posts = res.data;
        console.log(this.posts);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
  methods: {
    clicketest(value) {
      // console.log(value);
      let PostId = value.id;
      let UserId = localStorage.getItem("getId");
      // console.log(value);
      let token = localStorage.getItem("getToken");
      let hits = value.hits + 1;
      // console.log(UserId);

      http
        .put(
          "/post/" + PostId,
          {
            title: value.title,
            category: value.category,
            content: value.content,
            fileUrl: value.fileUrl,
            hits: hits,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });

      this.$router.push({
        name: "PostDetail",
        params: { userId: UserId, postId: PostId },
      });

      // alert('click');
      // console.log(value);
    },
    clickFree() {
      let postCategory = "free";
      let token = localStorage.getItem("getToken");

      http
        .get("/posts/category/" + postCategory, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    clickQuestion() {
      let postCategory = "QnA";
      let token = localStorage.getItem("getToken");

      http
        .get("/posts/category/" + postCategory, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clickTrade() {
      let postCategory = "share";
      let token = localStorage.getItem("getToken");

      http
        .get("/posts/category/" + postCategory, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.searchResult {
  width: 100%;
}

.card {
  align-content: center;
  width: 100%;
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
