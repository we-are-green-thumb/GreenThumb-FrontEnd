<template>
  <div>
    <uploadPlant />
    <resultHospital />

    <v-btn @click="test">테스트</v-btn >
  </div>
</template>

<script>
import uploadPlant from "../../components/Hospital/HosPlant.vue";
import resultHospital from "../../components/Hospital/HosResultPlant.vue";
// import axios from "axios"
import http from '@/util/http-common'

export default {

  name: "Hospital",
  components: {
    resultHospital,
    uploadPlant,
  },
  methods : {
    test() {
      http
      .get('/user/1')
      .then(res => {
        // handle success
        console.log(res);
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
      .then(() => {
        // always executed
      })
    }
  }
};
</script>

<style>
</style>