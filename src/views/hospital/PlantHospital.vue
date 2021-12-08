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
import axios from "axios"

export default {
  name: "Hospital",
  components: {
    resultHospital,
    uploadPlant,
  },
  methods : {
    test() {
      axios
      .get('https://reqres.in/api/users?page=2')
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