<template lang="">
     <!-- <nav-form> -->
          <nav>
            <button>내 식물</button>          
            <button>커뮤니티</button>          
            <router-link :to="{name:'Hospital'}">식물병원</router-link>          
          </nav>
</template>

<script>
export default {
    
}
</script>

<style>
    nav {
  float: right;
}
</style>