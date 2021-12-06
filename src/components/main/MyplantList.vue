<template>
  <div class =" imageList" v-if="logincheck">
      <img src="../../assets/images/sample_02.png" width="200" height="200" >
      <img src="../../assets/images/sample_02.png" width="200" height="200">
  </div>
  <div class =" imageList" v-else>
      <img src="../../assets/images/sample_01.png" width="200" height="200">
      <img src="../../assets/images/sample_01.png" width="200" height="200">
  </div>

  
</template>

<script>
export default {
  name: 'MyplantList',
  data() {
    return {
      logincheck :"false"
    }
  },  
}
</script>

<style>
  .imageList{
     text-align: center;
  }
</style>