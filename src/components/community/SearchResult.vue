<template>
  <div class="searchResult">
    <v-btn color="red" @click="clickFree">자유</v-btn>
    <v-btn color="red" @click="clickQuestion">질문</v-btn>
    <v-btn color="red" @click="clickTrade">나눔&거래</v-btn>

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
      <v-data-table
        :headers="headers"
        :items="posts"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    clickFree() {},
    clickQuestion() {},
    clickTrade() {},
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
        },
        { text: "내용", value: "content" },
        { text: "작성자", value: "writer" },
        { text: "조회수", value: "hits" },
        { text: "좋아요", value: "likes" },
        { text: "댓글수", value: "comment" },
        
      ],
      posts:[
          {
              title:"튤립에 대한 오해",
              content:"튤립은 번식을 못한다? 이것도 맞는 말임 근데 사람들이 뭐 개량으로 번식능력을 없앴다더라 이런말도 꽤 하던데",
              writer:"해바라기",
              hits:"33",
              likes:"6",
              comment:"5",
          },
           {
              title:"장미에 대한 오해",
              content:"장미는 번식을 못한다? 이것도 맞는 말임 근데 사람들이 뭐 개량으로 번식능력을 없앴다더라 이런말도 꽤 하던데",
              writer:"해바라기",
              hits:"33",
              likes:"6",
              comment:"5",
          }
          , {
              title:"해바라기에 대한 오해",
              content:"해바라기는 번식을 못한다? 이것도 맞는 말임 근데 사람들이 뭐 개량으로 번식능력을 없앴다더라 이런말도 꽤 하던데",
              writer:"해바라기",
              hits:"33",
              likes:"6",
              comment:"5",
          }
          , {
              title:"흑장미에 대한 오해",
              content:"흑장미는 번식을 못한다? 이것도 맞는 말임 근데 사람들이 뭐 개량으로 번식능력을 없앴다더라 이런말도 꽤 하던데",
              writer:"해바라기",
              hits:"33",
              likes:"6",
              comment:"5",
          }
          , {
              title:"메가커피에 대한 오해",
              content:"메가커피는 번",
              writer:"해바라기",
              hits:"33",
              likes:"6",
              comment:"5",
          }
          , {
              title:"스타벅스",
              content:"메가커피",
              writer:"영훈",
              hits:"45",
              likes:"66",
              comment:"77",
          }
      ],
    };
  },
};
</script>
<style>
.searchResult {
  width: 100%;
}
</style>
