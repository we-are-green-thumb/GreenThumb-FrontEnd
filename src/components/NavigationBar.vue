<template lang="">
       <div class="nav">
          <section>
            <v-btn color="red" >  <router-link :to="{name:'loginform'}" style="text-decoration:none" >내 식물</router-link> </v-btn>
            <v-btn color="red" >  <router-link :to="{name:'community'}" style="text-decoration:none" >커뮤니티</router-link> </v-btn>
            <v-btn color="red" >  <router-link :to="{name:'Hospital'}" style="text-decoration:none" >식물병원</router-link> </v-btn>
          </section>
        <hr size="50px" />

          </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .nav {
  float: right;
  text-align: right;
  width: 100%;
}
 hr {
  background-color: #009900;
}
</style>