<template>
    <div class="profileform">
        <ul>
            <li>
                <span><h3>빙봉의 식물들</h3></span>
                <a class="followercheck" href="#">팔로우 추가</a>                
            </li>
            <li>
                <span>안녕 식물키우는거 처음 보니?</span>
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
export default {
    
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