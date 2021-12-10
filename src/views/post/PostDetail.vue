<template>
    <div class="postDdetail">
           <plantHeader></plantHeader>
            <br /><br />
            <plantNav></plantNav> 
    </div>
</template>
<script>
import Header from '../../components/Header.vue';
import NavigationBar from "../../components/NavigationBar.vue";
export default {

    components:{
        "plantHeader":Header ,
        "plantNav":NavigationBar ,
    }
}
</script>
<style>
    .postDdetail{
        width: 100%;
    }
</style>