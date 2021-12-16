<template>
<div class="container">
    <section id="blue-box" class="box">
        <ul class="container">
            <div v-for="(u, i) in allPlant" :key="i">
            <!-- <router-link :to="{ name: 'Detailmyplant', params: { userId: u.userId, plantId: u.plantId }}"> -->
              <router-view :key="$route.Path">
            <li>
                <a> <img class="box" :src="u.imageUrl"></a>
                <a> {{ u.name }} </a><br>
                <a> {{ u.nickName }} </a>
            </li>
            <!-- </router-link> -->
            </router-view>
            </div>
                                                                     
        </ul>
        
        
    </section>
     </div>
</template>

<script>
import http from "@/util/http-common";


export default {
  name: 'PlantResultList',
  data(){
      return {
          allPlant:[],

      }
  },
  created(){
    let id = localStorage.getItem("getId")
    let token = localStorage.getItem("getToken")
    console.log(id)
     http
        .get("/plant", { headers: { Authorization: `Bearer ${token}` }})
        .then((res) => {
          this.allPlant = res.data;
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
  }
}
</script>

<style scoped>


.container {
    text-align: center;
	display: grid;
	grid-template-columns: 180px 180px 180px 180px 180px;
	grid-template-rows: 250px 250px 250px ;
}

.box {
  width: 160px;
  height: 180px;
  display: inline-block;
  border-radius: 15px;
}

li{
   list-style:none;
   padding-left:0px;
   }


</style>