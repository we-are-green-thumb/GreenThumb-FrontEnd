<template>
  <!-- <div class =" imageList" v-if="logincheck">
      <img src="../../assets/images/sample_02.png" width="160" height="180" >
      <img src="../../assets/images/sample_02.png" width="160" height="180">
  </div>
  <div class =" imageList" v-else>
      <img src="../../assets/images/sample_01.png" width="160" height="180">
      <img src="../../assets/images/sample_01.png" width="160" height="180">
  </div> -->
  <div>
    <div v-if="logincheck">
      <ui class="containerB">
        <li>
          <img class="boxB"
            src="../../assets/images/sample_02.png"
            width="160"
            height="180"
          />
        </li>
        <li>
          <img class="boxB"
            src="../../assets/images/sample_02.png"
            width="160"
            height="180"
          />
        </li>
      </ui>
    </div>

    <div v-else>
      <ui class="containerB">
        <li>
          <img class="boxB"
            src="../../assets/images/sample_01.png"
            width="160"
            height="180"
          />
        </li>
        <li>
          <img class="boxB"
            src="../../assets/images/sample_01.png"
            width="160"
            height="180"
          />
        </li>
      </ui>
    </div>
  </div>
</template>

<script>
export default {
  // name: "MyplantList",
  data() {
    return {
      logincheck: "false",
    };
  },
};
</script>

<style>
.imageList {
  text-align: center;
}

.containerB {
  text-align: center;
  float: center;
  display: grid;
  grid-template-columns: 180px 180px;
  grid-template-rows: 250px 250px;
}

.boxB {
  width: 160px;
  height: 180px;
  display: inline-block;
  border-radius: 15px;
}
</style>
