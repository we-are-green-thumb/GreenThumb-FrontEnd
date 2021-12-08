<template>
<div>
 
<ul class="myplantcontainer" >
  <li class="myplantform">
      <div>
          <img class="imgSize" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/08/urbanbrush-20180822082426113204.png" >
      </div>
      <div class="plantcontent" >
            <p> 100일째 자라는 중</p>
            <p> 3일 뒤 물을 주세요 </p>
            <p> 온도는 10도 적당합니다. </p>
      </div>
    </li>
</ul>
</div>
</template>

<script>
export default {
    
}
</script>
<style>
    .myplantcontainer {
	display: grid;
	grid-template-columns: 500px
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