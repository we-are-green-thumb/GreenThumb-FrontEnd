<template>
  <div class="body">
    
    <SearchResult></SearchResult>
    <!-- <v-btn @click="test"> 클릭</v-btn> -->
  </div>
</template>
<script>
import SearchResult from "../../components/community/SearchResult.vue";
// import axios from "axios";

export default {
    components : {
    "SearchResult" : SearchResult,
    },
  methods: {
    
    // test() {
    //   axios.get("http://127.0.0.1:80/user/1").then(function (response) {
    //       console.log(response);
    //     }).catch(function (error) {
    //       console.log(error);
    //     }).then(function () {
    //       // always executed
    //     });
    // },

  },
};
</script>
<style>
.body{
  width: 100%;
}

@media (max-width: 1280px){
    body {background: #880e4f;}
    h1::before {content: '2. '}
    h1::after {content: ' - 1025px ~ 1280px'}
}

/* 화면 너비가 0 ~ 1024px : 데스크탑 */
@media (max-width: 1024px){
    body {background: #4a148c;}
    h1::before {content: '3. '}
    h1::after {content: ' - 961px ~ 1024px'}
}

/* 화면 너비가 0 ~ 960px : 노트북 */
@media (max-width: 960px){
    body {background: #311b92;}
    h1::before {content: '4. '}
    h1::after {content: ' - 769px ~ 960px'}
}

/* 화면 너비가 0 ~ 768 : 타블렛 */
@media (max-width: 768px){
    body {background: #4a148c;}
    h1::before {content: '5. '}
    h1::after {content: ' - 577px ~ 768px'}
}

/* 화면 너비가 0 ~ 576 : 모바일 */
@media (max-width: 576px){
    body {background: #004D40;}
    h1::before {content: '6. '}
    h1::after {content: ' - 0px ~ 576px'}
}
</style>
