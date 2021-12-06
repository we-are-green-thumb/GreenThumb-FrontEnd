<template>
  <div>
    <div v-if="loginCheck">
      
    </div>
    <div  v-else>
      <h1 >로그인 후 식물을 등록해 보세요!</h1>
      <!-- <div class="imageList"> -->
        <!-- <img src="../../assets/images/logo.png">
        <img src="../../assets/images/logo.png"> -->

        <ui class="containerA">
            <li>
                <a> <img class="boxA" src = "../../assets/images/logo.png"> </a>
            </li>
            <li>
                <a> <img class="boxA" src = "../../assets/images/logo.png"> </a>
            </li>
        </ui>
      <!-- </div> -->

      
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

  .containerA {
    text-align: center;
     float: center;
	display: grid;
	grid-template-columns: 180px 180px ;
	grid-template-rows: 250px 250px ;
}

.boxA {
  width: 160px;
  height: 180px;
  display: inline-block;
  border-radius: 15px;
}
</style>