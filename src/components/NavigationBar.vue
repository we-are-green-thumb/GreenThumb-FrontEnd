<template lang="">
     <!-- <nav-form> -->
       <div class="nav">
          <nav>
            <v-btn color="red">내 식물</v-btn>
            <v-btn color="red">커뮤니티</v-btn>     
            <v-btn color="red">식물병원</v-btn>     
            <router-link :to="{name:'Hospital'}">식물병원</router-link>          
          </nav>
          </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .nav {
  /* float: right; */
  float: right;
  text-align: right;
  
}
</style>