<template>

    <div class="profileform">
        <ul>
            <li>
                <span ><p>{{userInfo.userNickname}}{{userInfo.id}}의 식물들!</p></span>
                <a class="followercheck" href="#">팔로우 추가</a>                
            </li>
            <li>
                <span><p>{{userInfo.userProfile}}</p></span>
            </li>
            <li>
                <span><a href="#">팔로우</a>13.5</span>
            </li>
            <li>
                <span><a href="#">팔로워</a>1</span>
            </li>
            
        </ul>

    </div>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from 'vuex';


export default {
   data () {
    return {
        userNickname : "",
        userProfile : ""
        };
    },
    computed : {
        ...mapState(["userInfo"])
    },
    created (){
        let id = localStorage.getItem("getId")
      http
        .get('/plant/user/'+ id)
        .then(res => {
            this.userNickname = res.data.userNickname;
            this.userProfile = res.data.userProfile;
        })
        .catch(err => {
            console.log(err);
        })
        .then(() => {
        })
    }
}

</script>

<style>

.profileform {
    display: grid;
    margin: 0 10px 10px 5px ;
}

.followercheck {
    float: right;
}

a {
    text-decoration:none; 
    color: black;
}    
</style>