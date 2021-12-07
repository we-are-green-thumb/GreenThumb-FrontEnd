<template>
    <div>
        <uploadPlant/>
        <resultHospital/>
    </div>
</template>

<script>
import uploadPlant from '../../components/Hospital/HosPlant.vue'
import resultHospital from '../../components/Hospital/HosResultPlant.vue'

export default {
    name : "Hospital",
    components : {
        resultHospital,
        uploadPlant,
    }
}
</script>

<style>
    
</style>