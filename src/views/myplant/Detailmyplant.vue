<template>
    <div>
        <span><p class="fontclass">{{plantId}}-식물 별명</p></span>
        <OnePlant/>
        <span><p class="fontclass">{{plantId}}-의 공통정보</p></span>
        <plantProfile/>
        <span><p class="fontclass">{{plantId}}-의 친구들을 알려줄게!</p></span>
        <PlantResultList/>
    </div>
</template>
<script>
import PlantResultList from '../../components/main/PlantResultList.vue'
import OnePlant from '../../components/myPlant/onePlant.vue'
import plantProfile from '../../components/myPlant/plantProfile.vue'

export default {
    name : "Detailmyplant",
    components : {
        PlantResultList,
        OnePlant,
        plantProfile,
    },
    computed: {
        plantName () {
            return this.$route.params.plantId
        }
    }
}
</script>
<style>

.fontclass {
    font-size: 18px;
    font-weight: 1000;
}
</style>