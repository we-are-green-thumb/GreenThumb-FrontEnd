<template>
    <div class="container">
      <section id="blue-box" class="box">
        <ul class="container">
          <div v-for="(u, i) in allPlant.slice(0, 15)" :key="i">
            <router-link 
              :to="{
                name: 'Detailmyplant',
                params: { userId: u.userId, plantId: u.plantId }}" >
              <li>
                <a> <img class="box" :src="u.imageUrl" /></a>
                <a> {{ u.name }} </a><br />
                <a> {{ u.nickName }} </a>
              </li>
            </router-link>
          </div>
        </ul>
      </section>
    </div>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from 'vuex';


export default {
  name: "plantfriend",
  data() {
    return {
      search: "",
      allPlant: [],
    };
  },

  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.$router.go(this.$router.currentRoute);
      }
    },
  },

  created() {
    let token = localStorage.getItem("getToken");
    console.log(this.$emit.plantName)
    http
      .get("/plant-name/" + "식물명", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        this.allPlant = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {});
  },
  computed: {
    ...mapState(["myplant"]),
    ...mapState(["userInfo"]),

    filterData() {
      return this.allPlant.filter((e) => e.name.indexOf(this.search) >= 0);

    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  display: grid;
  grid-template-columns: 180px 180px 180px 180px 180px;
  grid-template-rows: 250px 250px 250px;
}

.box {
  width: 160px;
  height: 180px;
  display: inline-block;
  border-radius: 15px;
}

li {
  list-style: none;
  padding-left: 0px;
}
.inputBox {
  background: white;
  height: 50px;
  width: 200px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
div {
  display: inline-block;
}
</style>
