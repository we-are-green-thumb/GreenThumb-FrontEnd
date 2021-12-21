<template>
<div>
 <h2>로그인 후 식물을 등록해보세요!</h2>
<ul class="myplantcontainer" >
    <v-li class="myplantform">
      <div>
          <img class="imgSize" src="https://png.pngtree.com/png-clipart/20210420/ourlarge/pngtree-creative-black-and-white-monochrome-graffiti-potted-plant-png-image_3223287.jpg" >
      </div>
      <div class="plantcontent" >
              <h3> 식물을 등록해주세요 </h3><br>
      </div>
    </v-li>

    <v-li class="myplantform">
      <div>
          <img class="imgSize" src="https://png.pngtree.com/png-clipart/20210420/ourlarge/pngtree-creative-black-and-white-monochrome-graffiti-potted-plant-png-image_3223287.jpg" >
      </div>
      <div class="plantcontent" >
              <h3> 식물을 등록해주세요 </h3><br>
      </div>
    </v-li>
</ul>
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

.myplantcontainer {
	display: grid;
	grid-template-columns: 450px 450px;
	grid-template-rows: 210px;
  margin: 10px;
}

.myplantform {
  background-color: lightgrey;
  border-radius: 15px;
  margin: 10px;
}

.imgSize {
  width: 160px;
  height: 180px;
  vertical-align: center;
  padding: 10px 10px 10px 10px;
}

.plantcontent {
  float: center;
  width: 180px;
  height: 120px;
  vertical-align: 70px;
  text-align: left;
  font-size: 15px;
  padding: 5px 16px 0 10px
}
</style>