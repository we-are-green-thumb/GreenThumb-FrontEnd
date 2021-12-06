<template>
  <ul class="myplantcontainer">
    <!-- 내 식물 -->
      <li class="myplantform">
        <div>
            <img class="imgSize" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/08/urbanbrush-20180822082426113204.png" >
        </div>
        <div class="plantcontent" >
                <h3> 해딩이 </h3><br>
                <a> 3일 뒤 물을 주세요 </a><br>
                <a> 온도는 10도 적당합니다. </a><br>
        </div>
      </li>

      <li class="myplantform">
        <div>
            <img class="imgSize" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/08/urbanbrush-20180822082426113204.png" >
        </div>
        <div class="plantcontent" >
                <h3> 해딩이 </h3><br>
                <a> 3일 뒤 물을 주세요 </a><br>
                <a> 온도는 10도 적당합니다. </a><br>
        </div>
      </li>
  </ul>
</template>


<script>
export default {
  // // name: "MyplantList",
  // data() {
  //   return {
  //     logincheck: "false",
  //   };
  // },
};
</script>

<style>

.myplantcontainer {
	display: grid;
	grid-template-columns: 450px 450px;
	grid-template-rows: 210px;
}

ul {
  margin: 0;
  padding : 0 0 0 10px;
  
}

.myplantform {

  background-color: lightgrey;
  border-radius: 15px;
  margin: 0 10px 10px 5px ;
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
