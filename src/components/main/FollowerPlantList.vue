<template>
<div>
 <h2 style="color:#2E7D32;">친구들의 식물을 살펴볼까요?</h2>
<ul class="myplantcontainer" >
    <li class="myplantform">
      <div>
          <img class="imgSize" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/08/urbanbrush-20180822082426113204.png" >
      </div>
      <div class="plantcontent" >
            <h3> 멍멍이 </h3><br>
            <a> 3일 뒤 물을 주세요 </a><br>
            <a> 온도는 10도 적당합니다. </a><br>
      </div>
    </li>

    <li class="myplantform">
      <div>
          <img class="imgSize" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/08/urbanbrush-20180822082426113204.png" >
      </div>
      <div class="plantcontent" >
            <h3> 멍멍이 </h3><br>
            <a> 3일 뒤 물을 주세요 </a><br>
            <a> 온도는 10도 적당합니다. </a><br>
      </div>
    </li>
</ul>
</div>
</template>

<script>
export default {
  name: "FollowerPlantList",
  data() {
    return {
      loginCheck: "false",
    };
  },
};
</script>

<style>
.imageList {
  text-align: center;
}
</style>
