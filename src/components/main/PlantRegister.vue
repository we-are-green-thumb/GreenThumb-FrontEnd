<template>
  <div>
    <div v-if="loginCheck">
      
    </div>
    <div  v-else>
      <h1 >로그인 후 식물을 등록해 보세요!</h1>
      <div class="imageList">
        <img src="../../assets/images/logo.png">
        <img src="../../assets/images/logo.png">
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'PlantRegister',
  data() {
    return {
       loginCheck : false,
    }
  },
}
</script>

<style>
  .imageList{
  text-align: center;
    /* vertical-align: middle; */
  }
</style>